console.log("hola mundo")
//comentarios de una linea de codigo, se usan diagonales para escribir comentarios//
/*este es un comentario con
distintas lineas de codigo*/

/*Secuencias de escape
\'      comilla simple
\"       comilla doble
\\      barra invertida
\n      linea nueva
\r      retorno de Carro
\t      tabulacion
\b      retroceso
\f      salto de pagina*/
/*tipos de datos:
undefined, null, Booleanm, String, symbol, number, Object*/

var primer_variable = "curso de javascript";
console.log(primer_variable);
primer_variable = 20;
console.log(primer_variable);
primer_variable++; /*el doble signo + nos permite sumarle 1 a uno a nuestra variable*/
primer_variable += 5; /*la combinacion += nos sirve para incrementar las variables el numero que nosostros queramos*/
console.log(primer_variable)
/*OTROS OPERADORES FUNCIONAN IGUAL COMO LO SON  
*=2 PARA MULTIPLICAR, /=2 PARA DIVIDIR*/

//CONCATENACION DE STRINGS//
var a = 'estoy aprendiendo';
var b = ' Javascript';
var mensaje = a + b;
console.log(mensaje)
var mensaje2 = 'me gusta aprender ' + b;
var mensaje3 = 'trabajando para ser un gran desarrollador, aprendiendo '
console.log(mensaje3);
mensaje3 += b;
console.log(mensaje3)
//LONGITUD DE CADENA// 
console.log(b.length)

//NOTACION DE CARACTERES EN STRINGS//

/*
CADENA:         J A V A S C R I P T
INDICES:        0 1 2 3 4 5 6 7 8 9
*/

console.log(b[5])

//INMUTABILIDAD DE CADENAS DE CARACTERES//

console.log(mensaje3)

mensaje3 += ' SIUUUUUU' //reasignacion de la variable, no podemos reasignar solo un valor o una letra en especifico de la cadena//
console.log(mensaje3)

//ARREGLOS Y ARREGLOS ANIDADOS arrays//

var calificaciones = [9, 4, 6, 7, 8]
var miArray = ['Mauro', 9]
console.log(calificaciones)
console.log(miArray)

//anidada//

var nombreCalif = [['Mauri', 9], ['Elena', 7], ['Carlos', 8]]

console.log(nombreCalif)

//ACCEDER A LOS ELEMENTOS DE LOS ARREGLOS//

console.log(nombreCalif[2])
//actualizar un elemento de un array//

/*

ARREGLO             [['Mauri', 9], ['Elena', 7], ['Carlos', 8]]        

INDICES                 0               1               2

INDICES INTERNOS        0      1 ,      0    1  ,    0        1
*/

nombreCalif[0][1] = 10;
console.log(nombreCalif)










