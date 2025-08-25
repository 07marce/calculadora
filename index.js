const express = require('express');
const app = express();
const port = 3002;

// ruta principal con instrucciones tipo texto
app.get('/', (req, res) => {
  res.send(`
    <pre>
Bienvenida a la calculadora de Marce!!

Ahora puedes ingresar los números directamente en la URL.

Opciones disponibles:
  1 → Sumar
  2 → Restar
  3 → Multiplicar
  4 → Dividir


    </pre>
  `);
});

//ruta con opción y números como parámetros
app.get('/:op/:num1/:num2', (req, res) => {
  const { op, num1, num2 } = req.params;
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  let resultado;

  if (isNaN(a) || isNaN(b)) {
    return res.send(`<h2> Por favor ingresa números válidos en la URL.</h2>`);
  }

  switch (op) {
    case '1':
      resultado = a + b;
      res.send(`<h2> El resultado de: ${a} + ${b} = ${resultado}</h2>`);
      break;
    case '2':
      resultado = a - b;
      res.send(`<h2> El resultado de: ${a} - ${b} = ${resultado}</h2>`);
      break;
    case '3':
      resultado = a * b;
      res.send(`<h2> El resultado de: ${a} * ${b} = ${resultado}</h2>`);
      break;
    case '4':
      if (b === 0) {
        res.send(`<h2> No se puede dividir por cero.</h2>`);
      } else {
        resultado = a / b;
        res.send(`<h2> El resultado de: ${a} / ${b} = ${resultado}</h2>`);
      }
      break;
    default:
      res.send(`<h2> Opción inválida. Regresa a <a href="/">/</a> para ver el menú.</h2>`);
  }
});

app.listen(port, () => {
  console.log(` Servidor activo en http://localhost:${port}`);
});