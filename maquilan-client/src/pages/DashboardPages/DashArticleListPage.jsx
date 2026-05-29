import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
  Stack,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { fetchArticles, createArticle } from '../../services/ArticleService';

const statusColors = {
  Active: 'success',
  Inactive: 'default',
};

function DashArticleListPage() {
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [formData, setFormData] = useState({ title: '', slug: '', content: '', status: 'Active' });

  // FIXED: Standard controlled pagination state declaration prevents DataGrid breaking on render
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0
  });

  useEffect(() => {
    loadLiveArticles();
  }, []);

  const loadLiveArticles = async () => {
    try {
      const res = await fetchArticles();
      let rawDataArray = [];
      if (res.data && Array.isArray(res.data.articles)) {
        rawDataArray = res.data.articles;
      } else if (Array.isArray(res.data)) {
        rawDataArray = res.data;
      }

      const mappedArticles = rawDataArray.map((article) => ({
        ...article,
        id: article._id || article.id,
      }));

      setRows(mappedArticles);
    } catch (err) {
      console.error("Fetch articles failed:", err);
      setRows([]);
    }
  };

  const handleOpenAddModal = () => {
    setModalMode('add');
    setFormData({ title: '', slug: '', content: '', status: 'Active' });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalMode === 'add') {
        await createArticle(formData);
      }
      setOpenModal(false);
      loadLiveArticles();
    } catch (err) {
      console.error("Form operational error:", err);
    }
  };

  const columns = [
    { field: 'id', headerName: 'Article Database ID', width: 220 },
    { field: 'title', headerName: 'Article Headline Title', width: 250 },
    { field: 'slug', headerName: 'URL Slug String', width: 180 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip label={params.value} color={statusColors[params.value] || 'default'} size="small" sx={{ mt: 1 }} />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 110,
      sortable: false,
      renderCell: () => (
        <Stack direction="row" spacing={0.5} sx={{ mt: 0.5 }}>
          <IconButton size="small" color="primary"><EditIcon fontSize="small" /></IconButton>
          <IconButton size="small" color="error"><DeleteIcon fontSize="small" /></IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Articles Publishing System
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {rows.length} records available
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<FileDownloadIcon />} size="small">Export</Button>
          <Button variant="contained" startIcon={<AddIcon />} size="small" onClick={handleOpenAddModal}>Add Article</Button>
        </Stack>
      </Stack>

      <Box sx={{ height: 450, width: '100%', background: 'white', borderRadius: 2, boxShadow: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
        />
      </Box>

      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 'bold' }}>
          {modalMode === 'add' ? 'Publish New Knowledge Base Article' : 'Modify Article Configuration'}
        </DialogTitle>
        <form onSubmit={handleFormSubmit}>
          <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Article Title" name="title" fullWidth required onChange={handleInputChange} value={formData.title} />
            <TextField label="Slug String" name="slug" fullWidth required onChange={handleInputChange} value={formData.slug} />
            <TextField label="Content Text Body" name="content" fullWidth required multiline rows={4} onChange={handleInputChange} value={formData.content} />
            
            <FormControl fullWidth>
              <InputLabel id="status-select-label">Publication Status</InputLabel>
              <Select
                labelId="status-select-label"
                name="status"
                value={formData.status}
                label="Publication Status"
                onChange={handleInputChange}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ p: 2.5 }}>
            <Button onClick={handleCloseModal} color="inherit">Cancel</Button>
            <Button type="submit" variant="contained">
              {modalMode === 'add' ? 'Publish Article' : 'Save Changes'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default DashArticleListPage;