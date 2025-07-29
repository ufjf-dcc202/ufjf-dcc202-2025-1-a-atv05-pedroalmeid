const tabuleiro = ['branco', 'branco', 'branco', '', 'preto', 'preto', 'preto'];
let selecionado = null;

export function getTabuleiro() {
    return [...tabuleiro];
}

export function getSelecionado() {
    return selecionado;
}

export function seleciona(posicao) {
    if (selecionado === null || selecionado === posicao) {
        selecionado = posicao;
        return;
    }
    mover(selecionado, posicao);
    selecionado = null;
}

function mover(origem, destino) {
    if (tabuleiro[origem] === '') return;
    if (tabuleiro[destino] !== '') return;

    if (Math.abs(destino - origem) === 1) {
        tabuleiro[destino] = tabuleiro[origem];
        tabuleiro[origem] = '';
    }
    else if ((destino - origem === 2 && tabuleiro[origem+1] !== '')
        || (destino - origem === -2 && tabuleiro[origem-1] !== '')) {
        tabuleiro[destino] = tabuleiro[origem];
        tabuleiro[origem] = '';
    }
}