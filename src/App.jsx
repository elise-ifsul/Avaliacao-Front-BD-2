// os arquivos bootstrap.min são versões minimalistas das bibliotecas, deletando quebras de linha e comentários
// assim as páginas são carregadas mais rapidamente no navegador do usuário.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// O professor fez uso do arquivo css normal aqui, mas eu vou tentar utilizar o mínimo para ver a diferença
// import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
// Popper é uma biblioteca para posicionar elementos flutuantes como caixas de díalogo e menus
import '@popperjs/core/dist/cjs/popper.js'

import { Produto } from './componentes/produto/Produto'

function App() {
    return(
        <div>
            <p>Estudo sobre React</p>
            <Produto />
        </div>
    );
}

export default App;

