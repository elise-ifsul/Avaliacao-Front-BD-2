import React from 'react';

export const ProdutoContext = React.createContext();

// Eu utilizo a exportação acima pois tem uma leitura melhor ao meu ver e possibilita exportar diversos valores, os quais devem ser referenciados pelo mesmo nome de origem
// A exportação default permite utilizar qualquer nome e apenas um item. Acredito ser benéfica se utilizar como uma classe que contenha funções, mas não sei se pode.
// export default ProdutoContext;