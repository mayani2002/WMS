// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import { AppTasks, AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography> */}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Users" total={100000} icon={'eva:people-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Requests Handled" total={1352831} color="info" icon={'mdi:calendar-check'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Trucks" total={20} color="warning" icon={'mdi:dump-truck'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Pending Requests" total={112} color="error" icon={'mdi:alert-decagram'} />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Visit all the dumping yards once' },
                { id: '2', label: 'Send E-Waste For Recycling' },
                { id: '3', label: 'Stakeholder Meeting' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
