import { Document } from "mongoose";


export interface CurrencyType extends Document {
    codigo: string;
    descripcion: string;
    ultimaTasaCambiara: number;
    estado: boolean
}