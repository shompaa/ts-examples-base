/*
    ===== Código de TypeScript =====
*/

let nombre:string;
nombre = 'Juan'

let hp: number | string = 95;
let vivo: boolean = true;

hp = '88';

console.log(`${nombre} tiene ${hp} puntos de vida`); // templates literales
console.log(nombre + ' tiene '  + hp + ' puntos de vida');