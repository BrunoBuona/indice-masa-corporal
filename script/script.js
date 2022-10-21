let peso = document.getElementById('peso');
let estatura = document.getElementById('estatura');
let resultado = document.getElementById('resultado');
let boton = document.getElementById('boton');

function calcularMasaCorporal(pesoIngresado,alturaIngresado){
    resultadoCorporal = pesoIngresado / (alturaIngresado * alturaIngresado)
    return resultadoCorporal
}
boton.addEventListener('click', e =>{
    let totalCorporal;
    peso = peso.value;
    estatura = estatura.value;
    totalCorporal = calcularMasaCorporal(peso,estatura);
    resultado.innerHTML = totalCorporal;
})


