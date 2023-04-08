import { Schema } from "mongoose";


export const CurrencyTypeSchema = new Schema({
    codigo: String,
    descripcion: String,
    ultimaTasaCambiara: Number,
    estado: Boolean
})