export const Ejercicio2 = () => {

    const sumarElementos = (arreglo: number[]) => {
        let suma = 0;
        for (let i = 0; i < arreglo.length; i++) {
            suma += arreglo[i];
        }
        return suma;
    }

    const arreglo = [1, 2, 3, 4, 5]; //1+2=3+3=6+4=10+5=15  

    return (
        <div>
            <h3>Ejercicio 2</h3>
            <p>Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne
                la suma de los elementos del arreglo. </p>
            <br />
            <h4>La suma de los elementos del arreglo es: <b>{sumarElementos(arreglo)}</b></h4>
        </div>
    )
}
