//Regras para criação de um novo compnente
//1 - A primeira letra do componente deve ser maiúscula
//2 - O componente DEVE ser uma função
//3 - O componente DEVE retornar APENAS UM elemento HTML
//4 - Exportar o componente

import { useEffect, useState } from "react";

function ConsultarCep(){

    const [localidade, setLocalidade] = useState("");
    const [estado, setEstado] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [cep, setCep] = useState("");

    useEffect(()=>{
        //Evento de carregamento do componente
        //Executar código ao abrir carrega o componente
        //AXIOS - Biblioteca de requisições

        fetch("https://viacep.com.br/ws/80250220/json/")
            .then(reposta => {
                return reposta.json();

            })
            .then(endereco => {
                setLocalidade(endereco.localidade);
                setLogradouro(endereco.logradouro);
                setEstado(endereco.estado);

            });
        
    });
    
    function digitar(event : any){
        setCep(event.target.value)
    }

    return(
        <div id="cunsultar_cep">
            <h1>Consultar Cep</h1>

            <input 
            type="text" 
            placeholder="Digite seu cep"
            onChange={digitar}/>


            <p>{localidade}</p>
            <p>{estado}</p>
            <p>{logradouro}</p>
            <p>CEP: {cep}</p>
        </div>
    );
}

export default ConsultarCep;

//Exercicios
//1 - Exibir os dados no HTML/Página
//2 - Realizar a requisição para a sua API
//3 - Resolver o problema de CORS
//4 - Exibir a lsita de produtos no HTML