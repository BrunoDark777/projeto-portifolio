/*Objetivo 1 - Quando o usuario clicar no botão Mostrar Mais devem abrir os projetos que estão escondidos no html.

Passo 1 - Pegar o botão Mostrar Mais no JS para poder verificar quando o usuario clicar em cima dele.

Passo 2 - Identificar o clique no botão.

Passo 3 - Adicionar a classe "ativo" nos projetos escondidos.

Objetivo 2 - Esconder o botão Mostrar Mais.

Passo 1 - Pegar o botão e esconder ele.
*/

//Objetivo 1 - Quando o usuario clicar no botão Mostrar Mais devem abrir os projetos que estão escondidos no html.

//Passo 1 - Pegar o botão Mostrar Mais no JS para poder verificar quando o usuario clicar em cima dele.

const botaoMostarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostarProjetos.addEventListener('click', () => {
    // Passo 3 - Adicionar a classe "ativo" nos projetos escondidos
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

    //Objetivo 2 - Esconder o botão Mostrar Mais.
    //Passo 1 - Pegar o botão e esconder ele.

    botaoMostarProjetos.classList.add("remover")

});
