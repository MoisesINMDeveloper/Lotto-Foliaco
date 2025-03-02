import type { PagoMovilesInterface } from './pagoMoviles.interface.model';
import type { ROLES } from './roles.enum.model';

export interface UserInterface {
  name: string;
  email: string;
  username: string;
  password: string;
  lastName: string;
  role: ROLES;
  verified: boolean;
  cedula: string;
  saldo: number;
  pagoMoviles: PagoMovilesInterface[];
}
