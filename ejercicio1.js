 /*const num1=6, num2=10;
 let suma = num1+num2;
 console.log(`La suma entre ${num1} y ${num2} es ${suma}`);*/

 //Función sumar
 const sumar=(num1, num2)=>{
    let suma=num1 + num2
    console.log(`La suma entre ${num1} y ${num2} es ${suma}`);
 }

 //exports.suma=sumar

 //Función restar
 function restar(num1, num2){
    let resta=num1 - num2
    console.log(`La resta entre ${num1} y ${num2} es ${resta}`);
 }
 //exports.resta=restar

 //Función multiplicar
 function multi(num1, num2){
    let mult=num1 * num2
    console.log(`La multiplicacón entre ${num1} y ${num2} es ${mult}`);
 }
 //exports.mult=multi

 //Función división 
 function dividir(num1, num2){
    let divide=num1 / num2
    console.log(`La división entre ${num1} y ${num2} es ${divide}`);
 }
 //exports.divide=dividir

 //Función Potenciador
 function potenciar(num1, num2){
    let potencia=Math.pow(num1,num2)
    console.log(`La potencia entre ${num1} y ${num2} es ${potencia}`);
 }
// exports.potencia=potenciar

 //Función Radicacion
 function radicar(num1, num2){
    let radica=Math.sqrt(num1,num2)
    console.log(`La radicación entre ${num1} y ${num2} es ${radica}`);
 }
 //exports.radica=radicar

 const operaciones={}
 operaciones.suma=sumar;
 operaciones.resta=restar;
 operaciones.mult=multi;
 operaciones.divide=dividir;
 operaciones.potencia=potenciar;
 operaciones.radica=radicar;

 module.exports=operaciones
