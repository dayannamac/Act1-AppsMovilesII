//interfaz del objeto Alumno
interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
}

export const Ejercicio6 = () => {

    //Objeto Alumno
    const alumnos: Alumno[] = [
        {
            nombre: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            nombre: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            nombre: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];

    const calcularPromedio = (alumnos: Alumno[]) => {
        let promedioCalificaciones = 0;
        for (let i = 0; i < alumnos.length; i++) {
            promedioCalificaciones += alumnos[i].calificacion;
        }
        const promedio = promedioCalificaciones / alumnos.length;
        return promedio;
    }

    const promedioCalificaciones = calcularPromedio(alumnos);
    

    const codigoAlumnos = `const alumnos = ${JSON.stringify(alumnos, null, 2)};`;

    return (
        <div>
            <h3>Ejercicio 6</h3>
            <p>
                Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y
                calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones.
            </p>
            <pre>{codigoAlumnos}</pre>
            <br />
            <h4>El promedio de las calificaciones: <b>{promedioCalificaciones}</b></h4>
        </div>
    )
}
