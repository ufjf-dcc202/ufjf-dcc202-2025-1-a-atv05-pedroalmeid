import { getTabuleiro, getSelecionado, seleciona } from "./logica.js";

const eTabuleiro = criaTabuleiro();
atualizaTabuleiro();
document.body.append(eTabuleiro);

// Cria discos brancos e pretos
function atualizaTabuleiro() {
    eTabuleiro.innerHTML = '';
    const vecTabuleiro = getTabuleiro();
    vecTabuleiro.forEach((cor, pos) => {
        const disco = criaDisco(cor, pos);
        disco.addEventListener("click", cliqueDisco);
        eTabuleiro.appendChild(disco);
    })
}

function cliqueDisco(evento) {
    const posAlvo = evento.target.dataset.pos;
    seleciona(posAlvo);
    atualizaTabuleiro();
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