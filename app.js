//Estan linea importa una biblioteca llamada "colors" que generalmente se utiliza para dar formato y color al texto que se imprime en la consola
    require("colors");
//Importamos el modulo llamado "math.js" que se encunetra directorio llamado "modules". Este módulo contiene funciones matemáticas.
    const math = require("./modules/math.js");
//Limpia la consola
    console.clear();
//Imprime el contenido del módulo "math.js" en la consola
    console.log(math);
//Se define una función asincrónica llamada main
    const main = async() =>{
//En el interior de la función main, se utiliza las funciones math.getRandomInt(10) para generar dos números enteros aleatorios, d y t, que se almacenan en las variables d y t
    let d= (math.getRandomInt(10))
    let t= (math.getRandomInt(10))

        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$".bgRed);
        console.log("$$".bgRed + "        FUNCIONES MATEMATICAS         ".red + "$$".bgRed);
        onsole.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n".bgRed);
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$".bgCyan);
        console.log("     NUMEROS ALEATORIOS  "+" "+d+" "+t);
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n".bgCyan);
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n".bgCyan);
        console.log("$$".bgCyan +"                                                                   "+"$$".bgCyan);
        console.log("$$".bgCyan + "             suma => "+ math.add(d,t) + "                "+ "$$".bgCyan);
        console.log("$$".bgCyan + "             resta =>"+ math.substract(d,t) +"                "+ "$$".bgCyan);
        console.log("$$".bgCyan + "             multiplicacion =>"+math.multiply(d,t) +"       "+ "$$".bgCyan);
        console.log("$$".bgCyan + "             divicion =>"+ math.divide(d,t) + "            "+ "$$".bgCyan);

        console.log ("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$".bgCyan);

    }
    ////para finalizar llamamos a la función main() al final del código para ejecutar el programa
    main();

    //En resumen, este código utiliza funciones del módulo "math.js" para generar números aleatorios y luego realiza operaciones matemáticas con estos números aleatorios, todo ello con un formato especial en la salida de la consola.s