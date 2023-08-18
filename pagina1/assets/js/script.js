function img() {
    let imagen = document.querySelector ("#zapato")
    if (imagen.style.borderColor != "") {
        imagen.style.borderColor = ""
    }
    else {
        imagen.style.borderColor = "red"
    }
}

