const express = require('express');
const app = express();

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('🧮 Bienvenida a la calculadora con Express');
});
let num1 = 4
let num2 = 8
// Ruta para sumar
app.get('/sumar', (req, res) => {
  const resultado = num1 + num2
  res.send(`Resultado de la suma: ${resultado}`);
});

// Ruta para restar
app.get('/restar', (req, res) => {
  const resultado = num1 - num2
  res.send(`Resultado de la resta: ${resultado}`);
});

// Ruta para multiplicar
app.get('/multiplicar', (req, res) => {
  const resultado = num1 * num2
  res.send(`Resultado de la multiplicación: ${resultado}`);
});

// Ruta para dividir
app.get('/dividir', (req, res) => {
  const resultado = num1 / num2
  if (resultado === 0) {
    res.send('❌ Error: no se puede dividir por cero');
  } else {
    const resultado = num1 / num2
    res.send(`Resultado de la división: ${resultado}`);
  }
});

// Iniciar servidor
app.listen(3001, () => {
  console.log('✅ Calculadora Express corriendo en http://localhost:3001');
});