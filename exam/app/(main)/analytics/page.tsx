"use client";

import { useContext } from 'react';
import { Box, useTheme } from '@mui/material';
import { ThemeContext } from '@/components/theme/ThemeRegistry';
import QuotaSection from '@/components/Analytics/QuotaSection';
import BotAnalytics from '@/components/Analytics/BotAnalytics';
import HumanAgentAnalytics from '@/components/Analytics/HumanAgentAnalytics';
import ActivityChart from '@/components/Analytics/ActivityChart';

const activityData = [
  { date: '2025-03-17', resolved: 4, assigned: 0, unassigned: 0 },
  { date: '2025-03-19', resolved: 5, assigned: 0, unassigned: 0 },
  { date: '2025-03-23', resolved: 6, assigned: 0, unassigned: 0 },
  { date: '2025-03-24', resolved: 5, assigned: 0, unassigned: 0 },
  { date: '2025-03-26', resolved: 8, assigned: 0, unassigned: 0 },
  { date: '2025-03-27', resolved: 3, assigned: 0, unassigned: 0 },
  { date: '2025-03-31', resolved: 2, assigned: 0, unassigned: 0 },
  { date: '2025-04-03', resolved: 1, assigned: 0, unassigned: 0 },
  { date: '2025-04-07', resolved: 5, assigned: 4, unassigned: 0 },
  { date: '2025-04-08', resolved: 1, assigned: 0, unassigned: 0 },
];

export default function AnalyticsPage() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const muiTheme = useTheme();

  const boxStyles = {
    p: 3,
    borderRadius: 2,
    bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
    border: '1px solid',
    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    boxShadow: isDark 
      ? '0 4px 20px 0 rgba(0,0,0,0.4)' 
      : '0 4px 20px 0 rgba(0,0,0,0.1)',
  };

  const titleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
    fontSize: '0.875rem',
    fontWeight: 500,
    mb: 1,
  };

  const valueStyles = {
    color: isDark ? '#fff' : '#000',
    fontSize: '1.5rem',
    fontWeight: 600,
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1400, margin: '0 auto' }}>
      <QuotaSection 
        isDark={isDark} 
        boxStyles={boxStyles}
        titleStyles={titleStyles}
        valueStyles={valueStyles}
      />

      <BotAnalytics 
        isDark={isDark} 
        boxStyles={boxStyles}
        titleStyles={titleStyles}
        valueStyles={valueStyles}
      />

      <HumanAgentAnalytics 
        isDark={isDark} 
        boxStyles={boxStyles}
        titleStyles={titleStyles}
        valueStyles={valueStyles}
      />

      <ActivityChart 
        isDark={isDark}
        data={activityData}
      />
    </Box>
  );
}