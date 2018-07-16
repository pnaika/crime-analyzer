const express = require('express');
const app = express();
require('es6-promise').polyfill();
require('isomorphic-fetch');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', async (req, res) => {
  const crimeData = await fetch('https://data.cityofchicago.org/resource/crimes.json')
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      return e;
    });
  res.send(crimeData)
});

app.get('/:primaryType', async (req, res) => {
  const primaryType = req.params.primaryType || '';
  const crimeData = await fetch(`https://data.cityofchicago.org/resource/crimes.json?primary_type=${primaryType}`, {
    data: {
      "$limit": 5000,
      "$$app_token": "FOGWI6Gp1Wt8lJ3nHRw3bsTRC"
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      return e;
    });
  res.send(crimeData)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to ${port}`)
});
