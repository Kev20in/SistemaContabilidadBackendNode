import { Schema } from "mongoose";


export const AccountTypeSchema = new Schema({
    codigo: String,
    descripcion: String,
    origen: String,
    estado: Boolean
})