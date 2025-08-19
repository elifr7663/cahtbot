import { configureStore } from "@reduxjs/toolkit";
import conversationsReducer from "./conversationsSlice";
import agentStatusReducer from "./agentStatusSlice";

const store = configureStore({
  reducer: {
    conversations: conversationsReducer,
    agentStatus: agentStatusReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
