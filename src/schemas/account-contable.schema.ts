import { Schema } from "mongoose";


export const AccountContableSchema = new Schema({
    codigo: String,
    descripcion: String,
    permiteTransaciones: String,
    nivel: Number,
    cuentaMayor: String,
    balance: String,
    estado: Boolean,
    tipoCuentaContableId: String,
    tipoMonedaId: String,
})
