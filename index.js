const express = require('express');
const app = express();



// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('🧮 Bienvenida a la calculadora con Express');
});
let num1 = 6
let num2 = 5

let saludo = 'Hola mundo'

app.get('/saludo', (req,res) => {
    const resultado= saludo
    res.send(`${resultado}`);
});

// Ruta para sumar
app.get('/sumar', (req, res) => {
  const resultado = num1 + num2
  res.send(`Resultado de la suma de ${num1} mas ${num2} es igual a: ${resultado}`);
});

// Ruta para restar
app.get('/restar', (req, res) => {
  const resultado = num1 - num2
  res.send(`Resultado de la resta de ${num1} menos ${num2} es igual a: ${resultado}`);
});

// Ruta para multiplicar
app.get('/multiplicar', (req, res) => {
  const resultado = num1 * num2
  res.send(`Resultado de la multiplicación de ${num1} por ${num2} es igual a: ${resultado}`);
});

// Ruta para dividir
app.get('/dividir', (req, res) => {
  const resultado = num1 / num2
  if (resultado === 0) {
    res.send('❌ Error: no se puede dividir por cero');
  } else {
    const resultado = num1 / num2
    res.send(`Resultado de la división de ${num1} dividio por ${num2} es igual a: ${resultado}`);
  }
});

// Iniciar servidor
app.listen(3001, () => {
  console.log('✅ Calculadora Express corriendo en http://localhost:3001');
});