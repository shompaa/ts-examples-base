//import { sumarFlechaConMasLineas } from './ejercicios/3-funciones';
/*
    ===== Código de TypeScript =====
*/

// const numero = 15;

// const resultado = sumarFlechaConMasLineas(numero, 2);
// console.log(resultado);


// Diferencia entre interfaces y clases

interface IPersona {
    nombre: string;
    apellido: string;
    heroe: IHeroe;
}

interface IHeroe {
    alterEgo: string;
    edad: number;
    nombreReal: string;
}

class Persona {
    constructor(
        public nombre: string,
        public apellido: string,
    ) {}
}

class Heroe extends Persona {
    constructor(
        public nombreReal: string, 
        public edad: number
    ) {
        super(nombreReal, 'Maldonado');
    }
}

const duffMan = new Heroe('duffman', 45);
console.log(duffMan);

