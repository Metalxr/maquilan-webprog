import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Stack,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
  CircularProgress
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { fetchUsers, createUser } from '../../services/UserService';

const roleColors = {
  admin: 'error',
  editor: 'primary',
  viewer: 'default',
};

function UsersPage() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', age: '', gender: '', contactNumber: '',
    email: '', username: '', password: '', address: '', type: 'editor'
  });

  const [currentUserRole, setCurrentUserRole] = useState('');
  const [checkingAuth, setCheckingAuth] = useState(true);

  // FIXED: Standardize pagination model declarations to match newer DataGrid expectations and avoid internal sizing breaks
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  useEffect(() => {
    const role = localStorage.getItem('userType');
    setCurrentUserRole(role || '');
    setCheckingAuth(false);

    if (!role) {
      navigate('/auth/signin');
    } else if (role === 'editor' || role === 'viewer') {
      navigate('/dashboard'); 
    } else if (role === 'admin') {
      loadLiveUsers();
    }
  }, [navigate]);

  const loadLiveUsers = async () => {
    try {
      const res = await fetchUsers();
      let rawDataArray = [];
      if (res.data && Array.isArray(res.data.users)) {
        rawDataArray = res.data.users;
      } else if (Array.isArray(res.data)) {
        rawDataArray = res.data;
      }

      const mappedUsers = rawDataArray.map((user) => ({
        ...user,
        id: user._id || user.id, 
      }));
      
      setRows(mappedUsers);
    } catch (err) {
      console.error("Fetch Error details:", err);
      setError('Connection Error: Unable to fetch database records.');
      setRows([]);
    }
  };

  if (checkingAuth) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (currentUserRole !== 'admin') {
    return (
      <Box sx={{ p: 4 }}>
        <Alert severity="error" variant="filled">
          Access Denied: You are restricted from accessing the Users Management Page.
        </Alert>
      </Box>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData);
      setOpenModal(false); 
      setFormData({ 
        firstName: '', lastName: '', age: '', gender: '', contactNumber: '',
        email: '', username: '', password: '', address: '', type: 'editor'
      });
      loadLiveUsers();
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  const columns = [
    { field: 'id', headerName: 'Database ID', width: 210 },
    {
      field: 'avatar',
      headerName: '',
      width: 60,
      sortable: false,
      renderCell: (params) => (
        <Avatar sx={{ width: 32, height: 32, fontSize: 14, mt: 1 }}>
          {(params.row.firstName?.[0] ?? '') + (params.row.lastName?.[0] ?? '')}
        </Avatar>
      ),
    },
    { field: 'firstName', headerName: 'First Name', width: 120 },
    { field: 'lastName', headerName: 'Last Name', width: 120 },
    { field: 'username', headerName: 'Username', width: 120 },
    { field: 'age', headerName: 'Age', type: 'number', width: 70 },
    { field: 'gender', headerName: 'Gender', width: 90 },
    { field: 'email', headerName: 'Email Address', width: 180 },
    { field: 'contactNumber', headerName: 'Contact No.', width: 130 },
    { field: 'address', headerName: 'Address', width: 150 },
    {
      field: 'type', 
      headerName: 'Role',
      width: 110,
      renderCell: (params) => (
        <Chip label={params.value} color={roleColors[params.value] ?? 'default'} size="small" sx={{ mt: 1 }} />
      ),
    },
    {
      field: 'isActive', 
      headerName: 'Status',
      width: 110,
      renderCell: (params) => (
        <Chip
          label={params.value ? 'Active' : 'Inactive'}
          color={params.value ? 'success' : 'default'}
          variant={params.value ? 'filled' : 'outlined'}
          size="small"
          sx={{ mt: 1 }}
        />
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Users Management
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      {/* FIXED: Wrapped custom tracking typography layouts cleanly using Material UI components to prevent DOM attribute pollution warnings */}
      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {rows.length} total users
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<FileDownloadIcon />} size="small">
            Export
          </Button>
          <Button 
            variant="contained" 
            startIcon={<PersonAddIcon />} 
            size="small"
            onClick={() => setOpenModal(true)}
          >
            Add User
          </Button>
        </Stack>
      </Stack>

      <Box sx={{ height: 550, width: '100%', background: 'white', borderRadius: 2, boxShadow: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          // FIXED: Use controlled state definitions rather than hardcoded configuration blocks to stabilize the footer structure
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
        />
      </Box>

      <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 'bold' }}>Sign Up New User Account</DialogTitle>
        <form onSubmit={handleFormSubmit}>
          <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Stack direction="row" spacing={2}>
              <TextField label="First Name" name="firstName" fullWidth required onChange={handleInputChange} value={formData.firstName} />
              <TextField label="Last Name" name="lastName" fullWidth required onChange={handleInputChange} value={formData.lastName} />
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField label="Age" name="age" type="number" fullWidth required onChange={handleInputChange} value={formData.age} />
              <TextField label="Gender" name="gender" fullWidth required onChange={handleInputChange} value={formData.gender} />
            </Stack>
            <TextField label="Contact Number" name="contactNumber" fullWidth required onChange={handleInputChange} value={formData.contactNumber} />
            <TextField label="Email Address" name="email" type="email" fullWidth required onChange={handleInputChange} value={formData.email} />
            <TextField label="Account Username" name="username" fullWidth required onChange={handleInputChange} value={formData.username} />
            <TextField label="Password" name="password" type="password" fullWidth required onChange={handleInputChange} value={formData.password} />
            <TextField label="Home Address" name="address" fullWidth required onChange={handleInputChange} value={formData.address} />
            
            <FormControl fullWidth>
              <InputLabel id="role-select-label">Account Role Type</InputLabel>
              <Select
                labelId="role-select-label"
                name="type"
                value={formData.type}
                label="Account Role Type"
                onChange={handleInputChange}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
                <MenuItem value="viewer">Viewer</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ p: 2.5 }}>
            <Button onClick={() => setOpenModal(false)} color="inherit">Cancel</Button>
            <Button type="submit" variant="contained">Register / Sign Up</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default UsersPage;