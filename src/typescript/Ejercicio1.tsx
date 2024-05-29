export const Ejercicio1 = () => {

    const areaCuadrado = (lado: number) => {
        return lado * lado;
    }

    return (
        <div>
            <h3>Ejercicio 1</h3>
            <p>Crear una función con parámetros que permita calcular el área de un cuadrado.</p>
            <br />
            <h4>El área del cuadrado es: <b>{areaCuadrado(10)}</b></h4>
        </div>
    )
}
