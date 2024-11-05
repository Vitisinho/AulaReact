import { useEffect } from "react"

function ProdutoListar(){
    useEffect(()=>{
        console.log("O componente foi carregado")
    })

    function pesquisarProdutos(){
        fetch("https://localhost:5085/api/produto/listar")
            .then(reposta => reposta.json())
            .then(produtos => {
                console.log(produtos)

            });
    }


    return <h1>Lista de produtos</h1>
}
export default ProdutoListar;