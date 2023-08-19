function verificar(){
    var numero1 = document.querySelector('#numero1').value
    var numero2 = document.querySelector('#numero2').value
    var numero3 = document.querySelector('#numero3').value
    let total = numero1 + numero2 + numero3
    let result = document.querySelector('#result')
   
    if (total === "911"){
    result.innerHTML = "password 1 correcto"

    } else if(total === "714") {
    result.innerHTML = "password 2 correcto"

    } else {
    result.innerHTML = "password incorrecto "
    }
   }