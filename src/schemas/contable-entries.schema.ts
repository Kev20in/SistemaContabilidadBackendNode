import { Schema } from "mongoose";


export const ContableEntriesSchema = new Schema({
    descripcion: String,
    idOrigen: String,
    cuenta: String,
    tipoMovimiento: String,
    ferchaAsiento: Date,
    montoAsiento: Number,
    estado: Boolean
})