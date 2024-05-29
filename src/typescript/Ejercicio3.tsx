export const Ejercicio3 = () => {

    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const nuevoArreglo = arreglo.map(numero => numero / 5);

    return (
        <div>
            <h3>Ejercicio 3</h3>
            <p>
                Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5. <br />
                const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] <br />
                Recomendación emplear función map. <br />
                Nota: <a href="https://www.geeksforgeeks.org/typescript-array-map-method/">
                    https://www.geeksforgeeks.org/typescript-array-map-method/</a>
            </p>
            <br />
            <h4>El nuevo arreglo con los valores divididos para 5 es: <b>{JSON.stringify(nuevoArreglo)}</b></h4>
        </div>
    )
}
