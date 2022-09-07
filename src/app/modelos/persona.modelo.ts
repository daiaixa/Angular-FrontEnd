export class persona {
    id?: number; //el id es autogenerado
    nombre: String;
    apellido: String;
    acerca_de : String;
    foto_perfil : String;

    constructor (nombre: String, apellido: String, acerca_de: String, foto_perfil: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.acerca_de = acerca_de;
        this.foto_perfil = foto_perfil;
    }


}