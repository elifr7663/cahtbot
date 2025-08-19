// redux/conversationsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface IConversationsState {
  newConversations: number;
  activeConversations: number;
  resolvedConversations: number;
}

// Initial state
const initialState: IConversationsState = {
  activeConversations: 0,
  newConversations: 0,
  resolvedConversations: 0,
};

// Create the slice
const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setRandom(state: IConversationsState) {
      state.activeConversations = Math.ceil(Math.random() * 50);
      state.newConversations = Math.ceil(Math.random() * 50);
      state.resolvedConversations = Math.ceil(Math.random() * 50);
    },
  },
});

// Export actions and reducer
export const { setRandom } = conversationsSlice.actions;
export default conversationsSlice.reducer;
