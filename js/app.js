function alterarStatus(id) {
    let botao = document
        .getElementById("game-${id}")
        .querySelector(".dashboard__item__button");

    if (botao.textContent === "Alugar") {
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
        botao.parentElement
            .querySelector(".dashboard__item__img")
            .classList.add("dashboard__item__img--rented");
    } else {
        botao.textContent = "Alugar";
botao.classList.remove("dashboard__item__button--return");
botao.parentElement.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
    }
}
