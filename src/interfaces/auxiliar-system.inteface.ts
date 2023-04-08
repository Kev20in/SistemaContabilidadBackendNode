import { Document } from "mongoose";


export interface AuxiliarSystem extends Document {
    nombre: string;
    estado: boolean;
}