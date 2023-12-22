let botonNegro = document.querySelector('#Negro')

let botonBlanco = document.querySelector('#Blanco')

let botonRojo = document.querySelector('#Rojo')
let imagen = document.querySelector('#fotoCronos')



botonNegro.onclick = function(){
    botonNegro.textContent.color = 'black'
    botonNegro.innerText = 'Negro'
    imagen.src = 'cronosNegro.png'
}

botonBlanco.onclick = function(){
    botonBlanco.textContent.color = 'white'
    botonBlanco.innerText = 'Blanco'
    imagen.src = 'cronosBlanco.png'
}

botonRojo.onclick = function(){
    botonRojo.textContent.color = 'red'
    botonRojo.innerText = 'Rojo'
    imagen.src = 'cronosRojo.png'
}


let correo
let edad
let botonInfo = document.querySelector('#info')
botonInfo.onclick = function(){
    edad = Number(prompt('Ingresa tu edad'))
    if(edad >= 18){
        correo = prompt('Ingresa tu correo')
    alert('Nos pondremos en contacto a la brevedad.')
   }else{
    return alert('Lo siento, eres menor. No puedes solicitar informacion')
}

}