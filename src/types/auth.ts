export type LoginUser = {
  username: string;
  password: string;
};

export type SignupUser = {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

export type LoginResponse = {
  username: string;
  refresh: string;
  access: string;
};
