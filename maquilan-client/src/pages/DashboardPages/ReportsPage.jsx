import React from 'react';
import { Typography, Box, Card, CardContent, Stack } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

// --- Sample Data ---
const monthlyRevenue = {
  xAxis: [{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], scaleType: 'band', label: 'Month' }],
  series: [
    { data: [4000, 3000, 5000, 4500, 6000, 5500, 7000, 6500, 8000, 7500, 9000, 8500], label: 'Revenue ($)' },
  ],
};

const userGrowth = {
  xAxis: [{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }],
  series: [
    { data: [10, 25, 40, 55, 80, 100, 130, 160, 190, 220, 265, 300], label: 'Total Users', area: true },
  ],
};

const trafficSources = [
  { id: 0, value: 40, label: 'Organic' },
  { id: 1, value: 25, label: 'Social Media' },
  { id: 2, value: 20, label: 'Referral' },
  { id: 3, value: 15, label: 'Direct' },
];

const quarterlyComparison = {
  xAxis: [{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarter' }],
  series: [
    { data: [35, 44, 24, 34], label: 'This Year' },
    { data: [28, 38, 31, 27], label: 'Last Year' },
  ],
};

const sparkData = [10, 14, 12, 18, 22, 19, 25, 28, 24, 30];

function ReportsPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Data visualization and analytics overview.
      </Typography>

      {/* KPI Spark Cards */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
        {[
          { label: 'Weekly Visits', value: '12,340', trend: '+8%' },
          { label: 'New Sign-ups', value: '1,892', trend: '+14%' },
          { label: 'Bounce Rate', value: '34.2%', trend: '-3%' },
          { label: 'Avg. Session', value: '3m 42s', trend: '+5%' },
        ].map(({ label, value, trend }) => (
          <Card key={label} sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">{label}</Typography>
              <Typography variant="h5" fontWeight="bold">{value}</Typography>
              <Typography
                variant="caption"
                color={trend.startsWith('+') ? 'success.main' : 'error.main'}
              >
                {trend} vs last period
              </Typography>
              <Box sx={{ mt: 1 }}>
                <SparkLineChart data={sparkData} height={50} />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* Monthly Revenue Bar Chart */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Monthly Revenue</Typography>
          <BarChart
            xAxis={monthlyRevenue.xAxis}
            series={monthlyRevenue.series}
            height={300}
          />
        </CardContent>
      </Card>

      {/* Two-column row: Line + Pie */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
        <Card sx={{ flex: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>User Growth (This Year)</Typography>
            <LineChart
              xAxis={userGrowth.xAxis}
              series={userGrowth.series}
              height={280}
            />
          </CardContent>
        </Card>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Traffic Sources</Typography>
            <PieChart
              series={[{ data: trafficSources }]}
              width={280}
              height={280}
            />
          </CardContent>
        </Card>
      </Stack>

      {/* Quarterly Comparison Bar Chart */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Quarterly Comparison</Typography>
          <BarChart
            xAxis={quarterlyComparison.xAxis}
            series={quarterlyComparison.series}
            height={300}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default ReportsPage;