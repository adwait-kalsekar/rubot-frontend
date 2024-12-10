export type LoginUser = {
  usernameOrEmail: string;
  password: string;
};

export type SignupUser = {
  email: string;
  username: string;
  fullName: string;
  password: string;
  confirmPassword: string;
};

export type User = {
  fullName: string;
  username: string;
  email: string;
  role: string;
};

type UserFromServer = {
  _id: string;
  fullName: string;
  username: string;
  email: string;
  role: string;
};

export type LoginResponse = {
  user: UserFromServer;
  accessToken: string;
  refreshToken: string;
};
