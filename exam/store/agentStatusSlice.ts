import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface IAgentStatusState {
  isOnline: boolean;
  lastSeen: string;
}

interface AgentStatusState {
  agents: Record<string, AgentStatus>;
}

const initialState: AgentStatusState = {
  agents: {},
};
export const agentStatusSlice = createSlice({
  name: 'agentStatus',
  initialState,
  reducers: {
    setAgentOnline: (state, action: PayloadAction<{ id: string }>) => {
      state.agents[action.payload.id] = {
        isOnline: true,
        lastSeen: new Date().toISOString(),
      };
    },
    setAgentOffline: (state, action: PayloadAction<{ id: string }>) => {
      if (state.agents[action.payload.id]) {
        state.agents[action.payload.id] = {
          isOnline: false,
          lastSeen: new Date().toISOString(),
        };
      }
    },
  },
});

export const { setAgentOnline, setAgentOffline } = agentStatusSlice.actions;
export default agentStatusSlice.reducer;
