//const express = require('express'); // Forma de importar de Node en JavaScript
import express from 'express'; // Forma de importar de Node en TypeScript

const app = express();

const port = 3000;

app.get('/', (req, res) => {

  res.status(201).json({
    of: true,
    msg: 'Nuevo id: 124'
  });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});