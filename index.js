const prompt = require("prompt-sync")({ sigint: true });

let id = parseInt(prompt());
let horas = parseInt(prompt());
let valor_hora = parseFloat(prompt());

let salario = horas * valor_hora;

console.log("NUMBER = " + id);

console.log("SALARY = U$ " + salario.toFixed(2));
