/*
    ===== Código de TypeScript =====
*/

let poderes: string[]= ['Volar', 'Rayos X', 'Super Aliento'];

poderes.push('Super Fuerza');

console.table(poderes);
console.info(poderes[0]);


interface Personaje {
    nombre: string;
    hp: number;
    poderes: string[];
    debilidad?: string;
}

// Definicion de un objeto
const ironMan: Personaje = {
    nombre: 'Tony Stark',
    hp: 100,
    poderes: ['Inteligencia', 'Dinero'],
}

// Agregar atributos a un objeto
ironMan.debilidad = 'Marakas';

console.table(ironMan);