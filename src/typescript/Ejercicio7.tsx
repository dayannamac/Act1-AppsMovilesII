import { useState } from "react";

export const Ejercicio7 = () => {

    const [valor, setValor] = useState(25);

    //Funcion del contador
    const contador = (numero: number) => {
        setValor(valor + numero)
    }

    return (
        <div>
            <h3>Ejercicio 7</h3>
            <p>Empleado el hook useState crear un acumulador de 5. Se debe visualizar el valor del
                acumular y dos botones (incrementar - disminuir)</p>
            <br />

            <center>
                <h3>{valor}</h3>
                <br />
                <button className='btn btn-success' onClick={() => contador(5)}>+5</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-danger' onClick={() => contador(-5)}>-5</button>
            </center>
        </div>
    )
}
