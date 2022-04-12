let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {

  const valorInformadoPeloUsuario = prompt('Digite um número positivo ou negativo');

//TODO: Complete os espaços em branco com uma possível solução para o desafio
  if (valorInformadoPeloUsuario > 0) {
    quantidadePositivos++;
  }
}

console.log(`${quantidadePositivos} valores positivos`);