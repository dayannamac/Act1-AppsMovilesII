export const Ejercicio4 = () => {

    const numeros = [1,2,3,4];

    const nuevoArreglo = numeros.map(numero => numero % 2 === 0 ? 'par' : 'impar');

    return (
        <div>
            <h3>Ejercicio 4</h3>
            <p>
                Del siguiente arreglo identificar si el número es par o impar. Se solicita generar un 
                nuevo arreglo que remplace el número por las palabras correspondiente: <br />
                •	Si es número par, colocar par <br />
                •	Si es número impar, colocar impar <br />
                const numeros = [1,2,3,4]
            </p>
            <br />
            <h4>El nuevo arreglo de par o impar es: <b>{JSON.stringify(nuevoArreglo)}</b></h4>
        </div>
    )
}
