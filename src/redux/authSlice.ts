import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoragePrefix } from 'utils/enum';
import { RootState } from './rootReducer';

const initialState: SessionType = {
  user: '',
  isLogged: false,
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<string, string>) {
      localStorage.setItem(StoragePrefix.user, payload);
      const date = new Date();
      date.setDate(date.getDate() + 7);
      localStorage.setItem(StoragePrefix.tokenExp, JSON.stringify(date));
      return { ...state, isLogged: true, user: payload };
    },
    logout(state) {
      Object.values(StoragePrefix).forEach((item) => {
        localStorage.removeItem(item);
      });
      return { ...state, isLogged: false, user: '' };
    },
  },
});

export const { login, logout } = slice.actions;

export const authSelector = (state: RootState) => state.user;

export default slice.reducer;
