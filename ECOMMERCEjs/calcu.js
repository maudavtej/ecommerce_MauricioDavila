// //CALCULADORA//

// const calc = console.log('Hola, vamos a calcular operaciones aritmeticas:')
// //alert('BIENVENIDO A TU CALCULADORA')//

// let nUno = parseFloat(prompt('Escribe el primer numero: '));
// let nDos = parseFloat(prompt('Escribe el segundo numero: '));

// let mensaje = prompt('ELIGE UN NUMERO PARA REALIZAR UNA OPERACION: 1.SUMA, 2. RESTA, 3. MULTIPLICA, 4. DIVIDE, 5.EXPONENTE')

// function suma(nUno, nDos) {
//     return nUno + nDos
// }

// function resta(nUno, nDos) {
//     return nUno - nDos
// }

// function mult(nUno, nDos) {
//     return nUno * nDos
// }

// function div(nUno, nDos) {
//     return nUno / nDos
// }

// function exp(nUno, nDos) {
//     return nUno ** nDos
// }

// let resultado;
// switch (mensaje) {
//     case '1':
//         resultado = suma(nUno, nDos);
//         break;
//     case '2':
//         resultado = resta(nUno, nDos);
//         break;
//     case '3':
//         resultado = mult(nUno, nDos);
//         break;
//     case '4':
//         resultado = div(nUno, nDos);
//         break;
//     case '5':
//         resultado = exp(nUno, nDos);
//         break;
// }
// alert('el resultado es :' + resultado)
// console.log('el resultado es:' + resultado);




const random = Math.floor(Math.random() * 3);
alert('HOLA, JUGUEMOS ADIVINA EL NUMERO')
let respuesta = parseInt(prompt('ELIGE UN NUMERO ENTRE 1 Y 3: '))
let resUser;

if (respuesta === random) {
    alert('ADIVINASTE, EL NUMERO ERA ' + respuesta)
    console.log('ADIVINASTE, EL NUMERO ERA ' + respuesta);
} else {
    alert('PERDISTE JAJAJAJA')
    console.log('PERDISTE JAJAJAJA')
}



