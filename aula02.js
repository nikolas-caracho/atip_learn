//Convenções
//camelCase para variáveis
//PascalCase para nomeação de classes

let boasVindas = 'Olá Mundo';

console.log(boasVindas);


//undefined
let mensagem;
console.log(`${mensagem}`);

// typescript tem melhorias ao js, como uma tipagem mais forte que limita essa flexibilidade que a tipagem dinamica do javascript possui
// o código typescript precisa ser transpilado em js para que o navegador interprete
//a const nao pode ser reatribuida
//var (melhor não usar. as diferenças sao majoritariamente de escopo e visibilidade. pesquisar depois)
const numero = 1234;
var mensagemVar = 'Olá Mundo';

//operadores de atribuição
let ano = 2024;
console.log(ano);

ano += 6;
ano -= 12;
console.log(ano);

//operador de comparação
console.log(22 == 22);
console.log(22 == '22');
console.log(22 === '22');

//operadores lógicos
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(true || true);
//operador de concatenação