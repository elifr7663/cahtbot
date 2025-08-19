'use client';

import { useContext } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { ThemeContext } from '@/components/theme/ThemeRegistry';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AgentTableRow from '@/components/Agents/AgentTableRow';

// Sample data - replace with real data later
const sampleAgents = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    lastActive: '2025-04-13 10:30 AM',
    avatar: '/avatars/1.png'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Agent',
    lastActive: '2025-04-13 09:15 AM',
    avatar: '/avatars/2.png'
  },
  // Add more sample agents as needed
];

export default function AgentsPage() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const muiTheme = useTheme();

  const containerStyles = {
    p: 4,
    maxWidth: 1400,
    margin: '0 auto'
  };

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 4
  };

  const tableContainerStyles = {
    borderRadius: 2,
    bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
    border: '1px solid',
    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    boxShadow: isDark 
      ? '0 4px 20px 0 rgba(0,0,0,0.4)' 
      : '0 4px 20px 0 rgba(0,0,0,0.1)',
  };

  const tableCellStyles = {
    color: isDark ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
    borderBottom: '1px solid',
    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
  };

  const tableHeaderCellStyles = {
    ...tableCellStyles,
    fontWeight: 600,
    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
  };

  const handleEditAgent = (id: string) => {
    // Handle edit action
    console.log('Edit agent:', id);
  };

  const handleDeleteAgent = (id: string) => {
    // Handle delete action
    console.log('Delete agent:', id);
  };

  return (
    <Box sx={containerStyles}>
      {/* Header Section */}
      <Box sx={headerStyles}>
        <Box>
          <Typography variant="h5" sx={{ 
            color: isDark ? '#fff' : '#000',
            fontWeight: 600,
            mb: 1
          }}>
            Agents
          </Typography>
          <Typography variant="body1" sx={{ 
            color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
          }}>
            {sampleAgents.length} total agents
          </Typography>
        </Box>
        
        <Button
          variant="contained"
          startIcon={<PersonAddIcon />}
          sx={{
            bgcolor: muiTheme.palette.primary.main,
            '&:hover': {
              bgcolor: muiTheme.palette.primary.dark,
            },
            textTransform: 'none',
            px: 3,
            py: 1,
          }}
        >
          Add New Agent
        </Button>
      </Box>

      {/* Agents Table */}
      <TableContainer component={Paper} sx={tableContainerStyles}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={tableHeaderCellStyles}>Agent</TableCell>
              <TableCell sx={tableHeaderCellStyles}>Role</TableCell>
              <TableCell sx={tableHeaderCellStyles}>Status</TableCell>
              <TableCell sx={tableHeaderCellStyles}>Last Active</TableCell>
              <TableCell sx={tableHeaderCellStyles} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleAgents.map((agent) => (
              <AgentTableRow
                key={agent.id}
                agent={agent}
                isDark={isDark}
                onEdit={handleEditAgent}
                onDelete={handleDeleteAgent}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
