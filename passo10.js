// PASSO 10 - Regra composta de acesso

let nomesPermitidos = ["carlos", "ana", "joao"];

function verificarAcesso(nome, idade) {

  if (nomesPermitidos.includes(nome) && idade >= 18) {
    return "Acesso liberado para " + nome;
  } else {
    return "Acesso negado";
  }

}

// Testes
console.log(verificarAcesso("carlos", 20));
console.log(verificarAcesso("ana", 16));
console.log(verificarAcesso("romeu", 25));
console.log(verificarAcesso("joao", 18));


// Fim

