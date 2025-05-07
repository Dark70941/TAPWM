
function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

function ordenarNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

function ehPalindromo(texto) {
    if (typeof texto !== 'string') return false;
    const formatado = texto.toLowerCase().replace(/\s+/g, '');
    const invertido = formatado.split('').reverse().join('');
    return formatado === invertido;
}

function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2) return "erro";

    const contagemLetras = (str) => {
        const letras = {};
        for (let char of str.toLowerCase()) {
            letras[char] = (letras[char] || 0) + 1;
        }
        return letras;
    };

    const letras1 = contagemLetras(palavra1);
    const letras2 = contagemLetras(palavra2);

    for (let letra in letras2) {
        if (!letras1[letra] || letras1[letra] < letras2[letra]) {
            return "não é um subconjunto";
        }
    }

    return "é um subconjunto";
}
