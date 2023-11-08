    const Mathe = {};

    function getRandomInt(max) {
        return Math.floor(Math.random()* max);
    }

    function add(a,b){
    return a + b;
    }

    function substract(a,b){
        return a - b;
    }


    function multiply(a,b){
        return a * b;
    }


    function divide(a,b){
        if (b == 0){
            return "NO SE PUEDE DIVIDIR POR 0"
        }else{
            return a / b ;
        }
    }

    Math.add = add;
    Math.substract = substract;
    Math.multiply = multiply;
    Math.divide = divide;
    Math.getRandomInt = getRandomInt

    module.exports = Math;