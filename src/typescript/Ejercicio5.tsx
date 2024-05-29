export const Ejercicio5 = () => {

    const datos = [7, 5, "sistemas", "hola", "adios", 2];

    const textos: string[] = [];
    const numeros: number[] = [];

    for (let i = 0; i < datos.length; i++) {
        if (typeof datos[i] === 'string') {
            textos.push(datos[i] as string);
        } else if (typeof datos[i] === 'number') {
            numeros.push(datos[i] as number);
        }
    }

    let textoMayor = textos[0];
    for (let i = 1; i < textos.length; i++) {
        if (textos[i].length > textoMayor.length) {
            textoMayor = textos[i];
        }
    }

    //Operaciones matemáticas
    const [a, b, c] = numeros;
    const suma = a + b + c;
    const resta = a - b - c;
    const multiplicacion = a * b * c;
    const division = a / b / c;
    const promedio = suma / numeros.length;

    return (
        <div>
            <h3>Ejercicio 5</h3>
            <p>
                A partir del siguiente array que se proporciona ejecutar las siguientes acciones: <br />
                const datos= [7, 5, “sistemas”, "hola", "adios", 2]; <br />
                • Determinar cuál de los tres datos de texto es mayor. <br />
                • Determinar el resultado de las cinco operaciones matemáticas realizadas con los tres datos numéricos.
            </p>
            <br />
            <h4>El texto mayor es: <b>{textoMayor}</b></h4>
            <br />
            <h4>Operaciones:</h4>
            <h5>Suma=<b>{suma}</b></h5>
            <h5>Resta=<b>{resta}</b></h5>
            <h5>Multiplicación=<b>{multiplicacion}</b></h5>
            <h5>División=<b>{division}</b></h5>
            <h5>Promedio=<b>{promedio}</b></h5>
        </div>
    )
}
