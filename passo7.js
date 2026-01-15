let horasSemana = [2, 1, 3, 0, 2, 4, 1]; // horas trabalhadas de domingo a sábado

function contarDiaBons(lista) 
{let contador = 0;for (let i=0; i< lista.length; i++){if (lista[i] >= 2){contador++;}}return contador;}
let resultado = contarDiaBons(horasSemana);
console.log("Dias bons de trabalho: " ,resultado);


//fim