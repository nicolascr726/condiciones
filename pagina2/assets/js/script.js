function check(){
    let sopaipilla = document.querySelector("#sopaipilla").value
    let choripan = document.querySelector("#choripan").value
    let empanada = document.querySelector("#empanada").value
    let result = document.querySelector("#result")
    let total = Number(sopaipilla)+Number(choripan)+Number(empanada)
    if (total <= 10){
        result.innerHTML = "Llevas" + " " + total + " " + "stickers.";
        
    } else {
        result.innerHTML = "Llevas demasiados stickers";
    }
}