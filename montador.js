const tabuleiro = criaTabuleiro();
document.body.append(tabuleiro);

// Cria discos brancos e pretos
for (let i = 0; i < 7; i++) {
    if (i == 3) continue;
    const disco = criaDisco(i < 3 ? "branco": "preto", i);
    tabuleiro.append(disco);
}

function criaTabuleiro() {
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}

function criaDisco(cor, pos) {
    const eDisco = document.createElement("div");
    eDisco.classList.add("disco");
    eDisco.dataset.cor = cor;
    eDisco.dataset.pos = pos;
    return eDisco;
}