import { Schema } from "mongoose";


export const AuxiliarSystemSchema = new Schema({
    nombre: String,
    estado: Boolean
})