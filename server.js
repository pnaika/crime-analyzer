const express = require('express');
const app = express();
require('es6-promise').polyfill();
require('isomorphic-fetch');
const _ = require('lodash');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', async (req, res) => {
    let crimeData = [];
    try {
        crimeData = await fetch(`https://data.cityofchicago.org/resource/crimes.json`)
            .then((res) => {
                return res.json();
            });
    } catch (e) {
        return e;
    }
    res.send(crimeData)
});

app.get('/details/:id', async (req, res) => {
    const id = req.params.id || '';
    let crimeData = [];
    try {
        crimeData = await fetch(`https://data.cityofchicago.org/resource/crimes.json?case_number=${id}`)
            .then((res) => {
                return res.json();
            });
    } catch (e) {
        return e;
    }

    res.send(crimeData)
});

app.get('/primaryTypes', async (req, res) => {
    let crimeData = [];
    let primaryType = [];

    try {
        crimeData = await fetch(`https://data.cityofchicago.org/resource/crimes.json`)
            .then((res) => {
                return res.json();
            });

        primaryType = _.uniq(_.map(crimeData, 'primary_type'));
    } catch (e) {
        return e;
    }

    res.send(primaryType)
});

app.get('/primaryTypes/:primaryType', async (req, res) => {
    const primaryType = req.params.primaryType || '';
    let crimeData = [];
    try {
        crimeData = await fetch(`https://data.cityofchicago.org/resource/crimes.json?primary_type=${primaryType}`)
            .then((res) => {
                return res.json();
            });
    } catch (e) {
        return e;
    }

    res.send(crimeData)
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening to ${port}`)
});
