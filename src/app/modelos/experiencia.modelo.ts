export class experiencia {
    id?: number; //el id es autogenerado
    categoria: String;
    puesto: String;
    descripcion : String;
    referencia : String;
    tel_refe : String;
    fecha_inicio : String;
    fecha_fin : String;

    constructor (categoria: String, puesto: String, descripcion: String, referencia: String, tel_refe : String,
        fecha_inicio: String, fecha_fin: String){
        this.categoria = categoria;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.referencia = referencia;
        this.tel_refe = tel_refe;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
    }

}