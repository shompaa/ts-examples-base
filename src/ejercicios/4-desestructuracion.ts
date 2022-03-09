/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    duracion: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: string;
}

const reproductor: Reproductor = {
    volumen: 92,
    duracion: 3.5,
    cancion: 'Torero',
    detalles: {
        autor: 'Elmer Figueroa',
        anio: '2002'  
    }
}

// Desestructuracion de objetos

console.log(`La cancion es ${reproductor.cancion} y dura ${reproductor.duracion} minutos, del autor ${reproductor.detalles.autor}`);

const { duracion, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

console.log(`La cancion es ${cancion} y dura ${duracion} minutos, del autor ${autor}`);


// Desestructuracion de arreglos

const pjsDBZ = ['Goku', 'Krillin', 'Majin Boo'];

const [, , boo] = pjsDBZ;

console.log(boo);
