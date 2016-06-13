'use strict'
//----------------------------------------------------------------------------------
// Requires
//----------------------------------------------------------------------------------
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongo = require('mongojs');
//----------------------------------------------------------------------------------
// Global VARS
//----------------------------------------------------------------------------------
const app = express();
const port = 3000;
const db = mongo('ecommerce2', ['products']);

//----------------------------------------------------------------------------------
// MiddleWare
//----------------------------------------------------------------------------------
app.use(bodyParser.json());
app.use(cors());


//----------------------------------------------------------------------------------
// ENDPOINTS
//----------------------------------------------------------------------------------
app.post('/api/products', (req, res, next) => {
    db.products.save(req.body, (err, response) => {
        return err ? res.status(500).json(err) : res.status(200).json(response);
    })
});
app.get('/api/products', (req, res, next) => {
    db.products.find({}, (err, response) => {
        return err ? res.status(500).json(err) : res.status(200).json(response);
    })
});
app.get('/api/products/:id', (req, res, next) => {
    let idObj = {
        _id: mongo.ObjectId(req.params.id)
    };
    db.products.findOne(idObj, (err, response) => {
        return err ? res.status(500).json(err) : res.status(200).json(response);
    })
});
app.put('/api/products/:id', (req, res, next) => {
    if(!req.params.id){
        return res.status(400).send('id query needed');
    }
    let query = {
        _id: mongo.ObjectId(req.params.id)
    }
    db.products.update(query, req.body, (err, response) => {
        return err ? res.status(500).json(err) : res.status(200).json(response);
    })
});
app.delete('/api/products/:id', (req, res, next) => {
    if(!req.params.id){
        return res.status(400).send('id query needed');
    }
    let query = {
        _id: mongo.ObjectId(req.params.id)
    }
    db.products.remove(query, (err, response) => {
        return err ? res.status(500).json(err) : res.status(200).json(response);
    })
});


app.listen(port, () => console.log(`Listening on port ${port}`));