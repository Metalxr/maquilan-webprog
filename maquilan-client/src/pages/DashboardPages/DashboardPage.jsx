import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography, Card, CardContent } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 150,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DashboardPage() {
    // FIXED: Controlled state model explicitly handling pagination sizes to avoid size property read failures
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 5,
        page: 0
    });

    return (
        <>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Dashboard
            </Typography>
            
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Card sx={{ flex: 1, background: '#fafafa', boxShadow: 1 }}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom variant="subtitle2">
                            Total Registered Residents
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                            11,245
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ flex: 1, background: '#fafafa', boxShadow: 1 }}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom variant="subtitle2">
                            Active Evacuation Centers
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'error.main' }}>
                            8 / 12
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ flex: 1, background: '#fafafa', boxShadow: 1 }}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom variant="subtitle2">
                            Urgent Hazard Incident Dispatches
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'warning.main' }}>
                            14
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center" justifyContent="center">
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <BarChart
                        series={[
                            { data: [35, 44, 24, 34], label: 'Flooding' },
                            { data: [51, 6, 49, 30], label: 'Landslide' },
                            { data: [15, 25, 30, 50], label: 'Fire' },
                        ]}
                        height={290}
                        xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                    />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'Dist. 1' },
                                    { id: 1, value: 15, label: 'Dist. 2' },
                                    { id: 2, value: 20, label: 'Dist. 3' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </Box>
                <Box sx={{ width: 200, display: 'flex', justifyContent: 'center' }}>
                    <Gauge width={100} height={100} value={66} startAngle={-110} endAngle={110} text="66%" />
                </Box>
            </Stack>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Recent Evacuees Log
            </Typography>
            <Box sx={{ height: 370, width: '100%', background: 'white', borderRadius: 2, boxShadow: 1 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            </Box>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Location Map
            </Typography>
            <Box sx={{ height: 500, width: '100%' }}>
                <MapContainer center={[14.604253, 120.994314]} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[14.604253, 120.994314]}>
                        <Popup>
                            National University-Manila <br />
                            <p><i>551 F. Jhocson St, Sampaloc, Manila, 1008 Metro Manila</i></p>
                        </Popup>
                    </Marker>
                </MapContainer>
            </Box>
        </>
    );
}

export default DashboardPage;