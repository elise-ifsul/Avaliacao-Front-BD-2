import { useContext } from "react";
import { ProdutoContext } from "./ProdutoContext";

// Por algum motivo a função Tabela() é chamada 6x e em 2 delas arrayObjetos é um array vazio, nas outras se torna um objeto
// Após a mudança da linha 15 de Produto.jsx o código funciona, mas ainda é chamada 6x e em 2 como um array vazio
export function Tabela() {
    const {arrayObjetos, removerProdutos} = useContext(ProdutoContext);

    return(
        <div>
            <h1>PRODUTOS</h1>
            <table>
                <thead>
                    <tr>
                        <th scope = "col"> Ações </th>
                        <th scope = "col"> ID </th>
                        <th scope = "col"> Nome </th>
                        <th scope = "col"> Descrição </th>
                        <th scope = "col"> Estoque </th>
                        <th scope = "col"> Valor </th>
                        <th scope = "col"> Data de cadastro </th>
                    </tr>
                </thead>
                <tbody>
                    {arrayObjetos.map(
                        objeto => (
                            <tr key = {objeto.id} >
                                <td>
                                    <button> Modificar </button>
                                    <button onClick = { () => removerProdutos(objeto.id) } > Remover </button>
                                </td>
                                <th scope = "row"> {objeto.id} </th>
                                <td> {objeto.nome} </td>
                                <td> {objeto.descricao} </td>
                                <td> {objeto.quantidade_estoque} </td>
                                <td> {objeto.valor} </td>
                                <td> {objeto.data_cadastro} </td>
                            </tr>
                        )
                    ) }
               </tbody>
            </table>
        </div>
    )
}
