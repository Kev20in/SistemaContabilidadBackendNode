import { Document } from 'mongoose';

export interface AccountContable extends Document {
  codigo: string;
  descripcion: string;
  permiteTransaciones: string;
  nivel: number;
  cuentaMayor: string;
  balance: number;
  estado: boolean;
  tipoCuentaContableId: string;
  tipoMonedaId: string;
}
