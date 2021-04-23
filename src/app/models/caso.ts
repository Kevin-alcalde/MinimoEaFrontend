export class Caso {
    constructor(_id = "", nombre = "",apellidos = "", identificador="",  genero="", clasificacion="") {
        this._id = _id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.identificador = identificador;
        this.genero=genero;
        this.clasificacion=clasificacion;
      }
    
_id?: string;
nombre: string;
apellidos: string;
identificador: string;
genero: string;
clasificacion: string;


}
