//Valores equivalentes a false são 0, '' , null, undefined e NaN
let nome = ('23 ' + "Insira seu nome");


if (nome !== undefined) { // se o nome não for indefinido
    console.log('Olá ' + nome); //exibe a
    // mensagem 'olá' concatenada 
    //com a varável nome
}


//if de condições compostas

let idade = 21;
let possuicnh = true;

if (idade >= 18 && possuicnh) { // possuicnh no if 
    //é igual a possuicnh == true
    console.log('Pode dirigir');
} else {
    console.log('Não pode dirigir');
}

//ifs aninhados devem ser trocados por else if

let hora = 19;
//as condições serão analisadas perante a ordenação em que foram escritas
if (hora < 12) {
    console.log('Bom dia');
} else if (hora < 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite!');
}