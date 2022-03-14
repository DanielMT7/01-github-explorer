import { useState } from "react";
//  usando useSate
// Imutabilidade -- Não devemos alterar uma váriavel e se quiser adicionar mais informações, devemos criar uma nova váriavel e guarda o valor anterior mais o novo valor.

// usuarios = ['diego3g', 'dieegosf', 'danileao']

// usuarios.push('rafacamarda')

// novoUsuario = [...usuarios, 'rafacamarda']

export function Counter() {
    //let counter = useState(0);
    //Atribuição via desestruturação
    let [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}