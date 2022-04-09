const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



reader.question("What would you like to calculate?", function(input) {
    mathSymbol = input[0];
    num1 = Number(input[2]);
    num2 = Number(input[4]);



    if (mathSymbol === "+") {
        console.log(num1 + num2);
    }

    if (mathSymbol === "-") {
        console.log(num1 - num2);
    }

    if (mathSymbol === "*") {
        console.log(num1 * num2)
    }

    if (mathSymbol === "/") {
        console.log(num1 / num2)
    }

    if (mathSymbol === "sqt") {
        console.log(Math.sqt(num1));
    }

    reader.close()

});