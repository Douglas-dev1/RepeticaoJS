const nomeMeses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezebro'
]

const mes = prompt("Informe o número do mês");
const numeroMes = Number(mes);

let mensagem = 'Mês inválido'

if ((numeroMes != NaN) && (numeroMes > 0) && (numeroMes <= 12)) {
    mensagem = `${nomeMeses[numeroMes - 1]} é o mês de número ${numeroMes}`
} else {
    for (let index = 0; index < nomeMeses.length; index++) {
        if ((mes.toLowerCase) === nomeMeses[index].toLowerCase()) {
            mensagem = `${mes} é o mês de número ${index + 1}`
            break;
        }
    }
}

console.log(mensagem)
/*if(mes>0){
    console.log(nomeMeses[mes-1]);
}
else{
    console.log("Mês inválido");
}*/
