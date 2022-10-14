const express = require("express");
const app = express();
const { products } = require("./data");
// app.get("/", (req, res) => {
//   res.json(products);
// });
app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// app.get("/api/products/1", (req, res) => {
//   const singleProduct = products.find((product) => product.id === 1);
//   res.json(singleProduct);
// });

app.get("/api/products/:productID", (req, res) => {
  //   console.log(req);
  //   console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }
  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello Word");
});

//learning query string parameters
app.get("/api/v1/query", (req, res) => {
  //   console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("no products matched your search");
    return res.status(200).json({ success: true, data: [] });
    //add return, because you cannot send basically two resp in the same reqe
  }
  return res.status(200).json(sortedProducts);
  //   res.send("hello world");
  //http://localhost:5000/api/v1/query?search=albany&limit=1
});
//http://localhost:5000/api/v1/query?name=join&id=4
/*In teminal
[nodemon] starting `node app.js`
server is listening on port 5000
{ name: 'join', id: '4' }
 */

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
