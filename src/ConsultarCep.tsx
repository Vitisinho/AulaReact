//Regras para criação de um novo compnente
//1 - A primeira letra do componente deve ser maiúscula
//2 - O componente DEVE ser uma função
//3 - O componente DEVE retornar APENAS UM elemento HTML
//4 - Exportar o componente

import { useEffect } from "react";

function ConsultarCep(){

    useEffect(()=>{
        //Evento de carregamento do componente
        //Executar código ao abrir carrega o componente
        //AXIOS - Biblioteca de requisições

        fetch("https://viacep.com.br/ws/01001000/json/")
            .then(reposta => {
                return reposta.json();

            })
            .then(endereco => {
                console.log(endereco);

            });
        
    });
    
    return(
        <div>
        <h1>Consultar Cep</h1>
        </div>
    );
}

export default ConsultarCep;

//Exercicios
//1 - Exibir os dados no HTML/Página
//2 - Realizar a requisição para a sua API
//3 - Resolver o problema de CORS
//4 - Exibir a lsita de produtos no HTML