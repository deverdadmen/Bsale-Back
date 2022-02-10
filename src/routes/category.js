const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/category', (req, res) => {
    mysqlConnection.query('SELECT * FROM category', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

router.get('/filtroCat/:texto', (req, res) => {
    const { texto } = req.params;
    mysqlConnection.query(`SELECT product.name AS name, product.url_image AS url_image, product.price AS price, product.discount AS discount, category.name AS category FROM product INNER JOIN category ON product.category=category.id WHERE category.name = '${texto}'`, (err, rows, fields) => {
         if(!err){
             res.json(rows);
         }else{
             console.log(err);
         }
     })
})

module.exports = router;