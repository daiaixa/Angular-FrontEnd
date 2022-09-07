export class educacion {
    id?: number; //el id es autogenerado
    establecimiento: String;
    curso: String;
    descripcion : String;
    fecha_inicio : String;
    fecha_fin : String;

    constructor (establecimiento: String, curso: String, descripcion: String, fecha_inicio: String, fecha_fin: String){
        this.establecimiento = establecimiento;
        this.curso = curso;
        this.descripcion = descripcion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
    }
}