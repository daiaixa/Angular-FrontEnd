export class educacion {
    id?: number; //el id es autogenerado
    establecimiento;
    curso;
    descripcion;
    fecha_inicio;
    fecha_fin;

    constructor (establecimiento: string, curso: string, descripcion: string, fecha_inicio: string, fecha_fin: string){
        this.establecimiento = establecimiento;
        this.curso = curso;
        this.descripcion = descripcion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
    }
}