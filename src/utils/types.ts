export interface LoginForm {
  username: string;
  password: string;
}

export interface User {
  name: string;
  username: string;
  password: string;
}

export interface UserResponse {
  id: string;
  name: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
