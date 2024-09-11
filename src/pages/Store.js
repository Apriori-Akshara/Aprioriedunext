import { configureStore, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  isAuthenticated: false,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Store both userId and name
      Cookies.set('user', JSON.stringify(action.payload)); // Store user data in cookies
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      Cookies.remove('user'); // Remove user data from cookies
    },
    setUserFromCookies: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    }
  }
});

export const { login, logout, setUserFromCookies } = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});
