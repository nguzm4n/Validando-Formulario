window.onload = function hideError() {
    errores.style.display = 'none'
}

let errores = document.querySelector('.invalidData')
let enviar = document.querySelector('.enviar')
let formulario = document.querySelector('.formulario')
let nombre = document.querySelector('.nombre')
let tarjeta = document.querySelector('.tarjeta')
let cardCode = document.querySelector('.cvc')
let monto = document.querySelector('.monto')
let apellido = document.querySelector('.apellido')
let ciudad = document.querySelector('.ciudad')
let codigoPostal = document.querySelector('.codigoPostal')
let mensaje = document.querySelector('.mensaje')
let estado = document.querySelector('#state')

formulario.addEventListener('submit', (e) => {
    let tarjetasDeCredito = document.getElementsByClassName('tarjetasDeCredito')
    let radios = false
    for(let i = 0; i < tarjetasDeCredito.length; i++) {
        if (tarjetasDeCredito[i].checked) {
         radios = true;
         break;
        } 
    }
    if(nombre.value == "" ) {
        errores.style.display = 'block';
        e.preventDefault()
        return false
    }
    else if (tarjeta.value == "") {
        errores.style.display = 'block';
        e.preventDefault()
        return false
    } else if (cardCode.value == "") {
        errores.style.display = 'block';
        e.preventDefault()
        return false
        
    } else if (monto.value == "") {
        errores.style.display = 'block';
        e.preventDefault()
        return false
    } else if (apellido.value == "") {
        errores.style.display = 'block';
        e.preventDefault()
        return false
    } else if (ciudad.value == "") {
        errores.style.display = 'block';
        e.preventDefault()
        return false
    } else if (codigoPostal.value == "") {
        errores.style.display = 'block';
        e.preventDefault()
        return false
    } else if (mensaje.value == "") {
        errores.style.display = 'block';
        e.preventDefault()
        return false
    } else if (estado.value == "Pick a state") {
        errores.style.display = 'block';
        e.preventDefault()
        return false
    } else if (radios === false) {
        errores.style.display = 'block';
        e.preventDefault()
        return false
    }
    
    
    else {
        return true
    }
})






