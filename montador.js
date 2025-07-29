const tabuleiro = criaTabuleiro();
document.body.append(tabuleiro);

const disco1 = criaDisco("branco")
tabuleiro.appendChild(disco1);
const disco2 = criaDisco("preto")
tabuleiro.appendChild(disco2);

function criaTabuleiro() {
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}

function criaDisco(cor) {
    const eDisco = document.createElement("div");
    eDisco.classList.add("disco");
    eDisco.dataset.cor = cor;
    return eDisco;
}