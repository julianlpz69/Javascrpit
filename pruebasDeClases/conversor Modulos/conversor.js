import {convertirTeperatura} from "./temperatura.js"
import {convertirDistancia} from "./distancia.js"
import {convertirPeso} from "./peso.js"


const gradosCelsius = document.getElementById("gradosCelsius")
const gradosFahrenheit = document.getElementById("gradosFahrenheit")
const btnTemperatura = document.getElementById("btnTemperatura")


btnTemperatura.addEventListener("click",()=>{
    
    const celsius = gradosCelsius.value
    const resultado = convertirTeperatura(celsius)
    gradosFahrenheit.value = resultado

})


const metros = document.getElementById("metros")
const pies = document.getElementById("pies")
const btnDistancia = document.getElementById("btnDistancia")

btnDistancia.addEventListener("click",()=>{
    
    const cantidadMetros = metros.value
    const resultado = convertirDistancia(cantidadMetros)
    pies.value = resultado.toFixed(3)

})


const kilogramos = document.getElementById("kilogramos")
const libras = document.getElementById("libras")
const btnPeso = document.getElementById("btnPeso")

btnPeso.addEventListener("click",()=>{
    
    const kilos = kilogramos.value
    const resultado = convertirPeso(kilos)
    libras.value = resultado.toFixed(3)

})
