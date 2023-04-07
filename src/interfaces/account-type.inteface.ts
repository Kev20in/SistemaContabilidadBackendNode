import { Document } from "mongoose";


export interface AccountType extends Document {
    codigo: string;
    descripcion: string;
    origen: string;
    estado: boolean
}