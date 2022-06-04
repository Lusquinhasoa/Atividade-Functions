//Pet
function verExercicio(){
    document.getElementById('exercicio').innerHTML = `<form>
    <label>Qual é a idade do seu cachorro ? <input type="number" id="idade"></label>
    <input type="button" value="Calcular a idade do seu PET" onclick="calcularIdadePet()">
</form>
<div id="res" class='res'></div>`
    var botao = document.getElementById('botao')
    botao.setAttribute('onclick', "fecharExercicio()")
    botao.innerHTML = `Fechar exércicio`
}

function fecharExercicio(){
    document.getElementById('exercicio').innerHTML = ``
    var botao = document.getElementById('botao')
    botao.setAttribute('onclick', "verExercicio()")
    botao.innerHTML = `Ver exércicio`
}

function calcularIdadePet(){
    var idade = document.getElementById('idade').value
    if(idade <= 0){
        document.getElementById('res').innerHTML = `<p class='erro'>ERRO a idade do seu pet não pode ser VAZIO, ZERO ou menor que zero.</p>`  
    }else{
        document.getElementById('res').innerHTML = `<p>Seu pet tem ${idade * 7} anos em anos humanos!</p>`
    }
}

// Pet e sua espécie

function verExercicio(){
    document.getElementById('exercicio').innerHTML = `<form>
    <label>Qual é a idade do seu cachorro ? <input type="number" id="idade"></label>
    <label>Qual é o nome do cachorro ? <input type="text" id="nome"></label>
    <label>Qual é a espécie? <input type="text" id="especie"></label>
    <input type="button" value="Calcular a idade do seu PET" onclick="calcularIdadePet()">
</form>
<div id="res" class='res'></div>`
    var botao = document.getElementById('botao')
    botao.setAttribute('onclick', "fecharExercicio()")
    botao.innerHTML = `Fechar exércicio`
}

function fecharExercicio(){
    document.getElementById('exercicio').innerHTML = ``
    var botao = document.getElementById('botao')
    botao.setAttribute('onclick', "verExercicio()")
    botao.innerHTML = `Ver exércicio`
}

function calcularIdadePet(){
    var especie = document.getElementById('especie').value
    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value

    if(idade <= 0 && nome == '' && especie == ""){
        document.getElementById('res').innerHTML = `<p class='erro'>ERRO a idade do seu pet não pode ser VAZIO, ZERO ou menor que zero. Especie e nome devem ser ditos.</p>`  
    }else{
        document.getElementById('res').innerHTML = `<p>Seu pet tem ${idade * 7} anos em anos humanos! , se chama ${nome} e é da especie ${especie} </p>`
    }

    document.getElementById
}

// Quanta fome a gente têm?

var max = 75

function  calcularLanche(){
    var idade = document.getElementById('idade').value
    var lanche = document.getElementById('lanchinho').value
    document.getElementById('res').innerHTML = `Você precisará de ${(max - idade)* lanchinho * 365 } para durar até a idade ${max}`
    
}

//Ta quente.Muito Quente.

function celsiusFahrenheit(){
    var celsius = document.getElementById('celsius').value
    document.getElementById('cel').innerHTML = `${celsius}° C é igual a ${celsius*1.8+32}° F`
    console.log(celsius)
}

function fahrenheitCelsius(){
    var fahrenheit = document.getElementById('fahrenheit').value
    document.getElementById('fah').innerHTML = ` ${fahrenheit}° F é igual a ${(fahrenheit-32)/1.8}° C`
}

// Geometria

function calcularCircunferencia(){
    var raio = document.getElementById('raio').value
    document.getElementById('res1').innerHTML = `A circunferência é ${raio*2*3.14}`
}

function calcularArea(){
    var raio = document.getElementById('raio2').value
    document.getElementById('res2').innerHTML = `A área é ${raio**2*3.14}`
}