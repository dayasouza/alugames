function confirmarDevolucao(nomeJogo) {
    return confirm(`Tem certeza de que deseja devolver o jogo ${nomeJogo}?`);
}
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (botao.textContent === "Alugar") {
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        contarJogosAlugados();
    } else {
        if (confirmarDevolucao(nomeJogo.textContent)) {
            botao.textContent = "Alugar";
            botao.classList.remove("dashboard__item__button--return");
            imagem.classList.remove("dashboard__item__img--rented");
            contarJogosAlugados();
        }
    }
}

function contarJogosAlugados() {
    const listaJogos = document.querySelectorAll('.dashboard__items__item');
    let contador = 0;

    listaJogos.forEach(function(jogo) {
        const botao = jogo.querySelector('.dashboard__item__button');
        if (botao.textContent === "Devolver") {
            contador++;
        }
    });

    console.log(`Total de jogos alugados: ${contador}`);
}
