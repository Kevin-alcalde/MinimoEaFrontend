export class Colectivo {
    constructor(_id = "", nombre = "",descripcion = "", vacuna="") {
        this._id = _id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.vacuna = vacuna;
       
}

_id?: string;
nombre: string;
descripcion: string;
vacuna: string;



}
