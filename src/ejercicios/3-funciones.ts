/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => a + b;
export const sumarFlechaConMasLineas = (a: number, b: number): number => {
    const total = a + b;
    return total;
};

const resultado = sumar(1.69, 2);
const resultadoFlecha = sumarFlecha(1.69, 2);

console.log(resultado);
console.log(resultadoFlecha);

function multiplicar(numero: number, otroNumero?: number, base: number = 5): number {
    return numero * base;
}

console.log(multiplicar(2));
console.log(multiplicar(2 , 3, 88));

interface PersonajeDBZ {
    nombre: string;
    hp: number;
    mostrarHp: () => void;
}

const nuevoPersonaje: PersonajeDBZ = {
    nombre: 'Goku',
    hp: 10,
    mostrarHp() {
        console.log(`${this.nombre} tiene ${this.hp} puntos de vida`);
    }
}

function darSemillaErmitaño(personaje: PersonajeDBZ, curarX: number): void {
    personaje.hp += curarX;
}

darSemillaErmitaño(nuevoPersonaje, 9999999);

nuevoPersonaje.mostrarHp();

module.exports = {
    darSemillaErmitaño,
    multiplicar
}