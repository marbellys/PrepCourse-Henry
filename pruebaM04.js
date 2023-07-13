function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retornar el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:
    if (x===y) return x;
    else if (x> y) return x;
         else if (y>x) return y;
 
    }

    console.log(obtenerMayor(9, 9));

    function mayoriaDeEdad(edad) {
        // Determinar si la persona puede ingresar al evento según su edad.
        // Si tiene 18 años ó más debe retornar el string: "Allowed".
        // Caso contrario: "Not allowed".
        if (edad>= 18) return "Allowed";
        return "Not allowed";
     
     }

     console.log("puede ingresar:"+mayoriaDeEdad(28));

     function conection(status) {
        // El argumento "status" representa el estado de conexión de un usuario.
        // Si el estado es igual a 1, el usuario está "Online".
        // Si el estado es igual a 2, el usuario está "Away".
        // De lo contrario, presumimos que el usuario está "Offline".
        // Retornar el estado de conexión del usuario.
        let estado='';
        switch(status){
           case 1: estado= "Online"; break;
           case 2: estado= "Away"; break;
           default: estado= "Offline";
        }
        return estado;
     }

     console.log("estado de conexión de un usuario: "+conection('a'));

     function saludo(idioma) {
        // Retornar un saludo en tres diferentes lenguajes:
        // Si "idioma" es "aleman", devuelve "Guten Tag!".
        // Si "idioma" es "mandarin", devuelve "Ni Hao!".
        // Si "idioma" es "ingles", devuelve "Hello!".
        // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
        switch(idioma){
           case 'aleman': saludo='Guten Tag!'; break;
           case 'mandarin': saludo ="Ni Hao!";break;
           case 'ingles': saludo ="Hello!";break;
           default: saludo="Hola!";
        }
        return saludo;
     }
     
     console.log("saludo: "+ saludo('ingles'));

     
     

     function colors(color) {
        let col;
        // La función recibe un color. Retornar el string correspondiente:
        // En caso que el color recibido sea "blue"   --> "This is blue".
        // En caso que el color recibido sea "red"    --> "This is red".
        // En caso que el color recibido sea "green"  --> "This is green".
        // En caso que el color recibido sea "orange" --> "This is orange".
        // Si no es ninguno de esos colores           --> "Color not found".
        // IMPORTANTE: utilizar el statement SWITCH.
        switch (color){
           case 'blue': col="This is blue";break;
           case 'red': col="This is red";break;
           case 'green': col="This is green";break;
           case 'orange': col="This is orange";break;
           default:  col="Color not found";
        }
        return col;
     }
     console.log("coler: "+ colors('blue'));

     
function esDiezOCinco(num) {
    // Retornar true si "num" es 10 o 5.
    // De lo contrario, retornar false.
    if(num ===10 || num ===5)return true;
    return false;
 }
 console.log("nro : "+ esDiezOCinco(10));

 function estaEnRango(num) {
    // Retornar true si "num" es menor que 50 y mayor que 20.
    // De lo contrario, retornar false.
    if (num>20 && num <50) return true;
    return false;
 }
 console.log("estaEnRango : "+ estaEnRango(50));

 function esEntero(num) {
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
   if ((num %2)===0) return true;
   return false;
 }

 console.log("esEntero : "+ esEntero(0.8));


 function fizzBuzz(num) {
    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // De lo contrario, retorna false.
    if ((num%3===0) && (num%5===0)) return "fizzbuzz"
    if (num%3===0) return "fizz"
    if (num%5===0) return "buzz"
    else return false
 }

 console.log("fizzBuzz : "+ fizzBuzz(45));

 function operadoresLogicos(num1, num2, num3) {
    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si todos los argumentos son cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    if (num1 > num2 && num1 > num3 && num1>0) return "Numero 1 es mayor y positivo";
    if (num1 < 0 || num2 < 0  && num3 < 0 ) return  "Hay negativos";
    if (num3 > num1 && num3 > num2 ){
       num3 +=1;
       return num3;
    } 
    if (num1 === 0 && num2 === 0 && num3 === 0) return "Error";
    else return false;
 }
 console.log("operadoresLogicos : "+ operadoresLogicos(2,0,6));


 function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    if (num <= 0 || num ===1 || num ===4) return  false;
    for (let x=2 ; x < num -1 ; x++){
    //for (let x=2 ; x < num/2 ; x++){
       if(num % x ===0) return false;
    }
    return true;
 }

 console.log("esPrimo : "+ esPrimo(20));


 function esVerdadero(valor) {
    // Si "valor" es verdadero retornar "Soy verdadero".
    // Caso contrario, retornar "Soy falso".
    // Tu código:
   if(valor) return "Soy verdadero";
   return "Soy falso";
 
 }




 function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos retornar true.
    // Caso contrario, retornar false.
    // Tu código:
 
    let cont=0;
    while (num >=1){
          cont +=1;
          num= num /10;
    }
    if (cont ===3) return true;
    return false;
 }

 console.log("tieneTresDigitos : "+ tieneTresDigitos(29));

 function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    let cont=0;
    do{
        cont+=1;
       num +=5;
       console.log(num);
    }while(cont<8)
    return num;
 }
 console.log("doWhile : "+ doWhile(2));