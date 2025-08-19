import {
  Box,
  Typography,
  TableCell,
  TableRow,
  Avatar,
  Chip,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AgentStatusIndicator from './AgentStatusIndicator';

interface Agent {
  id: string;
  name: string;
  email: string;
  role: string;
  lastActive: string;
  avatar: string;
}

interface AgentTableRowProps {
  agent: Agent;
  isDark: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const AgentTableRow = ({ agent, isDark, onEdit, onDelete }: AgentTableRowProps) => {
  const tableCellStyles = {
    color: isDark ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
    borderBottom: '1px solid',
    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
  };

  return (
    <TableRow
      sx={{
        '&:hover': {
          bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
        },
      }}
    >
      <TableCell sx={tableCellStyles}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src={agent.avatar} alt={agent.name} />
          <Box>
            <Typography sx={{ 
              color: isDark ? '#fff' : '#000',
              fontWeight: 500 
            }}>
              {agent.name}
            </Typography>
            <Typography variant="body2" sx={{ 
              color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
            }}>
              {agent.email}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell sx={tableCellStyles}>
        <Chip
          label={agent.role}
          size="small"
          sx={{
            bgcolor: isDark ? 'rgba(25, 118, 210, 0.2)' : 'rgba(25, 118, 210, 0.1)',
            color: isDark ? '#90caf9' : '#1976d2',
            fontWeight: 500,
          }}
        />
      </TableCell>
      <TableCell sx={tableCellStyles}>
        <AgentStatusIndicator agentId={agent.id} isDark={isDark} />
      </TableCell>
      <TableCell sx={tableCellStyles}>
        <Typography sx={{ 
          color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
        }}>
          {agent.lastActive}
        </Typography>
      </TableCell>
      <TableCell sx={tableCellStyles} align="right">
        <IconButton 
          size="small"
          onClick={() => onEdit?.(agent.id)}
          sx={{ 
            color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
            '&:hover': {
              color: '#1976d2',
            }
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton 
          size="small"
          onClick={() => onDelete?.(agent.id)}
          sx={{ 
            color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
            '&:hover': {
              color: '#f44336',
            }
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default AgentTableRow; 