const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js') //adding here the router after changing all

app.use(bodyParser.json()) // here we convert the body into json

const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];

const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Hobnobs", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];

app.use(cors());

const teaRouter = createRouter(teas)
app.use('/api/teas', teaRouter)  //this is the adress

const biscuitsRouter = createRouter(biscuits)
app.use('/api/biscuits', biscuitsRouter)

app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});
