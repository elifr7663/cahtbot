import { Grid, Paper, Typography } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface HumanAgentAnalyticsProps {
  isDark: boolean;
  boxStyles: any;
  titleStyles: any;
  valueStyles: any;
}

const HumanAgentAnalytics = ({ isDark, boxStyles, titleStyles, valueStyles }: HumanAgentAnalyticsProps) => {
  return (
    <>
      <Typography variant="h5" sx={{ 
        mb: 4,
        color: isDark ? '#fff' : '#000',
        fontWeight: 600
      }}>
        Human Agent Analytics
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={boxStyles}>
            <Typography sx={titleStyles}>
              <MessageIcon sx={{ color: '#1976d2' }} />
              TOTAL CONVERSATIONS
            </Typography>
            <Typography sx={valueStyles}>40</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={boxStyles}>
            <Typography sx={titleStyles}>
              <TrendingUpIcon sx={{ color: '#1976d2' }} />
              RESOLUTION RATE
            </Typography>
            <Typography sx={valueStyles}>100.00%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={boxStyles}>
            <Typography sx={titleStyles}>
              <AccessTimeIcon sx={{ color: '#1976d2' }} />
              AVG. RESOLUTION TIME
            </Typography>
            <Typography sx={valueStyles}>13h 50m 16s</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default HumanAgentAnalytics; 