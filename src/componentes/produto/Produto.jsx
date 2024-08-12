import { useState, useEffect } from "react";

import { ProdutoContext } from "./ProdutoContext";
import { Tabela } from "./TabelaProdutosHtml";

export function Produto() {
    const [arrayObjetos, modArrayObjetos] = useState( [] );
    const [alerta, modAlerta] = useState( {status: "", mensagem: ""} )
    const [editar, modEditar] = useState(false)
    const [Produto, modProduto] = useState( {
        id: "",
        nome: "",
        descricao: "",
        quantidadeEstoque: "",
        valor: "",
        dataCadastro: ""
    } )

    async function leituraProdutos() {
        // A função fetch() poderia ser chamada sem o objeto RequestInit que especifica o método GET
        // sem esse argumento, seria realizada por padrão uma chamada GET, mas fiz desta forma para melhor compreensão
        await fetch( `${process.env.REACT_APP_ENDERECO_BACK}/produtos`, {method: "GET"} )
            .then( resposta => resposta.json() )
            // No código do professor ele não utilizou assim, eu tive que utilizar para passar apenas o array com as linhas e não um objeto todo
            .then( dados => modArrayObjetos(dados.rows) ) 
            .catch( erro => console.log(`Erro: ${erro}`) )
    }

    async function removerProdutos(id) {
        if ( window.confirm("Deseja remover este item?") ) {
            try {
                await fetch( `${process.env.REACT_APP_ENDERECO_BACK}/produtos/${id}`, {method: "DELETE"} )
                .then( resposta => resposta.json() )
                .then( dados => modAlerta( {status: dados.status, mensagem: dados.mensagem} ) )
                leituraProdutos();
            } catch (erro) {
                console.log(`Erro: ${erro}`)
            }
        }
    }

    function novoProduto() {

    }

    function editarProduto() {
        
    }

    // useEffect() vai executar a função leituraProdutos() a primeira vez que a página for renderizada
    // caso usássemos uma varíavel no array utilizado em DependencyList, toda vez que esta variável fosse atualizada, useEffect renderirazia novamente a página e executaria leituraProdutos() novamente
    useEffect(
        () => { leituraProdutos(); },
        []
    )

    const funcoes = {arrayObjetos, removerProdutos}
    return(
        // <ProdutoContext.Provider value = { {arrayObjetos} } >
        // O professor utiliza da forma acima que seria traduzido como um objeto, que contém um objeto que contém uma lista?
        // Tentei utilizar apenas value={arrayObjetos} mas em algumas etapas, array objetos era passado como undefined, dando erro.
        // A função produto vai retornar ao Context os dados de funcoes e portanto, estará disponível em todos os arquivos que fazem parte do contexto
        <ProdutoContext.Provider value = { funcoes } >
            <Tabela />
        </ProdutoContext.Provider>
    )
}