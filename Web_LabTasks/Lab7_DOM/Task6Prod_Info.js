const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 3, name: "Monitor", price: 150 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find(p => p.id === productId);

  res.json(product);
});


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});