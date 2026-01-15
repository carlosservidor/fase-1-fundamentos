// Praticando um pouco mais com funções em JavaScript!!

function verificarIdade(idade) 
{
    if (idade.includes>= 18) 
        {return "Acesso Permitido";}

    else 
        {return "Acesso Negado";}
}

let nomes = ["carlos", "ana", "joao"];
function verificarNome(nomeDigitado) 
{
    if (nomes.includes(nomeDigitado)) 
        {return "Olá " + nomeDigitado + ", bem-vindo";}
    else 
        {return "Nome não reconhecido";}
}
console.log(verificarIdade(16));
console.log(verificarNome("maria"));

// Fim