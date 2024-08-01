// //Crie uma função chamada mostrarOrdemCrescente que recebe 3 números como parâmetros e exibe
// esses números em ordem crescente. Utilize essa função para exibir os números 5, 3 e 7 em ordem
// crescente.

function mostrarOrdemCrescente(n1, n2, n3) {
  let maior;
  let menor;
  let mediana;
  if (n1 > n2 && n1 > n3) {
    maior = n1;
    if (n2 > n3) {
      menor = n3;
      mediana = n2;
    }
  } else if (n2 > n1 && n2 > n3) {
    maior = n2;
    if (n3 > n1) {
      menor = n1;
      mediana = n3;
    }
  } else {
    maior = n3;
    if (n2 > n1) {
      menor = n1;
      mediana = n2;
    }
  }
  console.log(menor, mediana, maior);
}

mostrarOrdemCrescente(7, 5, 3);
mostrarOrdemCrescente(4, 5, 6);
mostrarOrdemCrescente(9, 8, 7);
mostrarOrdemCrescente(3, 5, 7);
