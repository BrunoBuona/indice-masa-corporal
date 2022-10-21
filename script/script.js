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

/* Codigo obfuscado.
var _0x8e9b=["\x70\x65\x73\x6F","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x65\x73\x74\x61\x74\x75\x72\x61","\x72\x65\x73\x75\x6C\x74\x61\x64\x6F","\x62\x6F\x74\x6F\x6E","\x63\x6C\x69\x63\x6B","\x76\x61\x6C\x75\x65","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];let peso=document[_0x8e9b[1]](_0x8e9b[0]);let estatura=document[_0x8e9b[1]](_0x8e9b[2]);let resultado=document[_0x8e9b[1]](_0x8e9b[3]);let boton=document[_0x8e9b[1]](_0x8e9b[4]);function calcularMasaCorporal(_0x47a2x6,_0x47a2x7){resultadoCorporal= _0x47a2x6/ (_0x47a2x7* _0x47a2x7);return resultadoCorporal}boton[_0x8e9b[8]](_0x8e9b[5],(_0x47a2x8)=>{let _0x47a2x9;peso= peso[_0x8e9b[6]];estatura= estatura[_0x8e9b[6]];_0x47a2x9= calcularMasaCorporal(peso,estatura);resultado[_0x8e9b[7]]= _0x47a2x9})

*/