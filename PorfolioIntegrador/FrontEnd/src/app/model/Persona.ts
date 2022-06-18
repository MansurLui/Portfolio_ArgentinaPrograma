export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    img: string;

    constructor(id: number, nombre: string, apellido: string, img: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}
