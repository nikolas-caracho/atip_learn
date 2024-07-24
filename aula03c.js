let mensagem = 'Olá Mundo!'; //variável global

function exibeMensagem() {
    let mensagem = 'Olá Pessoal! '; //preferível usar variáveis locais
    console.log(mensagem);
}

console.log(mensagem);

exibeMensagem();