// //. Crie uma função chamada obterMaior que recebe 2 números como parâmetros e retorna o maior deles.
// Utilize essa função para encontrar o maior número entre 4 e 7.

function obterMaior(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
let maior = obterMaior(7, 4);
console.log(`O maior número é ${maior}`);