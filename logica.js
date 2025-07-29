const tabuleiro = ['b', 'b', 'b', '', 'p', 'p', 'p'];

function mover(origem, destino) {
    if (origem < 0 || destino < 0 || origem > 6 || destino > 6) return;
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