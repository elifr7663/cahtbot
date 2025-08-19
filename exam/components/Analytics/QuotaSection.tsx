import { Grid, Paper, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

interface QuotaSectionProps {
  isDark: boolean;
  boxStyles: any;
  titleStyles: any;
  valueStyles: any;
}

const QuotaSection = ({ isDark, boxStyles, titleStyles, valueStyles }: QuotaSectionProps) => {
  return (
    <>
      <Typography variant="h5" sx={{ 
        mb: 4,
        color: isDark ? '#fff' : '#000',
        fontWeight: 600
      }}>
        This Month Quota
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6}>
          <Paper sx={boxStyles}>
            <Typography sx={titleStyles}>
              <TrendingUpIcon sx={{ color: '#1976d2' }} />
              EVENTS
            </Typography>
            <Typography sx={valueStyles}>1.5%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={boxStyles}>
            <Typography sx={titleStyles}>
              <AutoGraphIcon sx={{ color: '#1976d2' }} />
              AI USAGE
            </Typography>
            <Typography sx={valueStyles}>2.4%</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default QuotaSection; 