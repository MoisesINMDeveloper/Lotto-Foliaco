import type { UserInterface } from '@/models/user.interface.model';

export const setUserInfoAdapter = (data: UserInterface): UserInterface => {
  return {
    name: data?.name,
    email: data?.email,
    username: data?.username,
    lastName: data?.lastName,
    password: data?.password,
    role: data?.role,
    verified: data?.verified,
    cedula: data?.cedula,
    saldo: data?.saldo,
    pagoMoviles: data?.pagoMoviles,
  };
};
