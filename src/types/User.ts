// Дані, що приходять з форми реєстрації
export interface UserRegistration {
  // username: string;
  email: string;
  password: string;
}

// Дані, що приходять після логіну
export interface UserLogin {
  email: string;
  password: string;
}

// Дані, що повертаються з бекенду
export interface UserResponse {
  id: number;
  // username: string;
  // email: string;
  token?: string;
}

// тип для оновлення профілю
export interface UserUpdate {
  email?: string;
  username?: string;
}

// Дані, що повертаються з бекенду для оновлення профілю
export interface UserUpdateResponse {
  id: number;
  email: string;
  username?: string;
  message: string;
}


export interface UserState {
  user: UserResponse | null
  token: string | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}