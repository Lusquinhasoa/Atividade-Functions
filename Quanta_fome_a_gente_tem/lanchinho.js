var max = 75

function  calcularLanche(){
    var idade = document.getElementById('idade').value
    var lanche = document.getElementById('lanchinho').value
    document.getElementById('res').innerHTML = `Você precisará de ${(max - idade)* lanchinho * 365 } para durar até a idade ${max}`
    
}