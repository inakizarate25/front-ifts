import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    role: null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.role = action.payload;  // Esto sería 'socio', 'profesor' o 'admin'
    },
    logout(state) {
      state.isAuthenticated = false;
      state.role = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
