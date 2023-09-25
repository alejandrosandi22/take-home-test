import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

const initialState: GithubBranch = {
  name: 'main',
};

export const branchSlice = createSlice({
  name: 'branch',
  initialState,
  reducers: {
    setBranch: (state, action: PayloadAction<GithubBranch>) =>
      (state = action.payload),
  },
});

export const { setBranch } = branchSlice.actions;
export const selectCount = (state: RootState) => state.branch;
export default branchSlice.reducer;
