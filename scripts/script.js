// carne - 400 por pessoa + de 6 horas - 650
// cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refri/agua 1000ml por pessoa + de 6 horas 1500ml



let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");

var resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let crianca = inputCrianca.value;
    let duracao = inputDuracao.value;


    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * crianca);

    let qtdCerva = cervejaPP(duracao) * adultos;

    let qtdbebidas = bebidasPP(duracao) * adultos + ( bebidasPP(duracao) /2 * crianca);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdCerva/355)} latas de cerveja`
    resultado.innerHTML += `<p>${Math.ceil(qtdbebidas/2000)} garrafas de bebidas`

}

function carnePP(duracao){
    if (duracao >= 6){
        return 650
    }
    else{
        return 400
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000
    }
    else{
        return 1200
    }
}

function bebidasPP(duracao){
    if (duracao >= 6){
        return 1500
    }
    else{
        return 1000
    }
}