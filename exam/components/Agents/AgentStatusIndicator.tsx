import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setAgentOnline, setAgentOffline } from '@/store/agentStatusSlice';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

interface AgentStatusIndicatorProps {
  agentId: string;
  isDark?: boolean;
}

const AgentStatusIndicator = ({ agentId, isDark = false }: AgentStatusIndicatorProps) => {
  const dispatch = useDispatch();
  const agentStatus = useSelector((state: RootState) => 
    state.agentStatus.agents [agentId]
  );

  useEffect(() => {
    // Set agent as online when component mounts
    dispatch(setAgentOnline({ id: agentId }));

    // Set agent as offline when component unmounts
    return () => {
      dispatch(setAgentOffline({ id: agentId }));
    };
  }, [dispatch, agentId]);

  if (!agentStatus) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {agentStatus.isOnline ? (
        <>
          <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 16 }} />
          <Typography sx={{ 
            color: '#4caf50',
            fontWeight: 500
          }}>
            Online
          </Typography>
        </>
      ) : (
        <>
          <CancelIcon sx={{ color: '#bdbdbd', fontSize: 16 }} />
          <Typography sx={{ 
            color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
            fontWeight: 500
          }}>
            Offline
          </Typography>
        </>
      )}
    </Box>
  );
};

export default AgentStatusIndicator; 