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