let botonNegro = document.querySelector('#Negro')

let botonBlanco = document.querySelector('#Blanco')

let botonRojo = document.querySelector('#Rojo')


botonNegro.onclick = function(){
    botonNegro.textContent.color = 'Black'
    botonNegro.innerText = 'Negro'
    botonNegro.src = 'cronosNegro.png'
}

botonBlanco.onclick = function(){
    botonBlanco.textContent.color = 'White'
    botonBlanco.innerText = 'Blanco'
    botonBlanco.src = 'cronosBlanco.png'
}

botonRojo.onclick = function(){
    botonRojo.textContent.color = 'Red'
    botonRojo.innerText = 'Rojo'
    botonRojo.src = 'cronosRojo.png'
}


let correo = prompt('Ingresa tu correo')
let edad = Number(prompt('Ingresa tu edad'))
let botonInfo = document.querySelector('#info')
botonInfo.onclick = function(){
    if(edad >= 18)
    return correo
    alert('Nos pondremos en contacto a la brevedad.')
} else{
    return alert('Lo siento, eres menor. No puedes solicitar informacion')
}

