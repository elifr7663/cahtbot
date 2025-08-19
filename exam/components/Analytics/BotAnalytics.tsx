import { Grid, Paper, Typography } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import StarIcon from '@mui/icons-material/Star';

interface BotAnalyticsProps {
  isDark: boolean;
  boxStyles: any;
  titleStyles: any;
  valueStyles: any;
}

const BotAnalytics = ({ isDark, boxStyles, titleStyles, valueStyles }: BotAnalyticsProps) => {
  return (
    <>
      <Typography variant="h5" sx={{ 
        mb: 4,
        color: isDark ? '#fff' : '#000',
        fontWeight: 600
      }}>
        Bot Analytics
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6}>
          <Paper sx={boxStyles}>
            <Typography sx={titleStyles}>
              <MessageIcon sx={{ color: '#1976d2' }} />
              FEEDBACK COUNT
            </Typography>
            <Typography sx={valueStyles}>19</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={boxStyles}>
            <Typography sx={titleStyles}>
              <StarIcon sx={{ color: '#1976d2' }} />
              AVERAGE RATE
            </Typography>
            <Typography sx={valueStyles}>4.0</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default BotAnalytics; 