import { Box, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ActivityChartProps {
  isDark: boolean;
  data: any[];
}

const ActivityChart = ({ isDark, data }: ActivityChartProps) => {
  return (
    <>
      <Typography variant="h5" sx={{ 
        mb: 4,
        color: isDark ? '#fff' : '#000',
        fontWeight: 600
      }}>
        Human Agent Conversation Activity
      </Typography>
      
      <Box sx={{ width: '100%', height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 
            />
            <XAxis 
              dataKey="date" 
              angle={-45}
              textAnchor="end"
              height={60}
              tick={{ fill: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' }}
            />
            <YAxis 
              tick={{ fill: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: isDark ? '#1e1e1e' : '#fff',
                border: '1px solid',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '4px',
                color: isDark ? '#fff' : '#000'
              }}
            />
            <Legend 
              wrapperStyle={{
                color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
              }}
            />
            <Bar 
              dataKey="resolved" 
              name="Resolved" 
              fill="#4caf50"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

export default ActivityChart; 