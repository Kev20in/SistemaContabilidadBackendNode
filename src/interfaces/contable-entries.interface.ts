import { Document } from "mongoose";


export interface ContableEntries extends Document {
    descripcion: string,
    idOrigen: string,
    cuenta: string,
    tipoMovimiento: string,
    ferchaAsiento: string,
    montoAsiento: string,
    estado: boolean
}