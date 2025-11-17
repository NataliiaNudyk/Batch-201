import { createSlice, createAsyncThunk, isRejected } from '@reduxjs/toolkit'
import type { UserState, UserUpdate, UserUpdateResponse } from '../../types/User'
import type { RootState } from '../../app/store'


// API URL (тестове API)
const API_URL = 'https://reqres.in/api'

// --- Async Thunks --- //
export const registerUser = createAsyncThunk('user/register', async (data) => {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const result = await res.json()
  if (!res.ok) throw new Error(result.error || 'Register failed')
  return result
})

export const loginUser = createAsyncThunk('user/login', async (data) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const result = await res.json()
  if (!res.ok) throw new Error(result.error || 'Login failed')
  return result
})

export const updateProfile = createAsyncThunk<
  UserUpdateResponse,     
  UserUpdate,             
  { state: RootState }    
>(
  'user/update',
  async (data, { getState }) => {
    const token = getState().user.token;

    const res = await fetch(`${API_URL}/users/2`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    // 👇 Тепер жодного unknown!
    const result: UserUpdateResponse = await res.json();

    if (!res.ok) throw new Error(result?.message || 'Update failed');

    return result;
  }
);

const initialState: UserState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
}

// --- Slice --- //
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload.token
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload.token
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload }
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading'
          state.error = null
        }
      )
      .addMatcher(
        isRejected,
        (state, action) => {
          state.status = 'failed'
          state.error = action.error?.message || 'Unknown error'
        }
      )
  },
})

export const { logout } = userSlice.actions
export default userSlice.reducer
