let cores = ['verde', 'vermelho', 'amarelo'];

cores.push('azul', 'final'); // insere ao final da lista
cores.unshift('início') //insere no início da lista


cores.pop(); // remove do final
cores.shift(); // remove do começo

cores.splice(3, 2); // a partir do elemento 3, remove 2 elementos.

console.log(cores);


for (let i = 0; i < cores.lenght; i++ ) //inicializador; verificador; incrementador.
{
    let cor = cores[i];
    console.log(cor);

}

for (let cor of cores) {// itera o vetor
    console.log(cor);
}


let i = 0;
while (i < cores.length){
    let cor = cores [i];
    console.log(cor);
    i++;
}