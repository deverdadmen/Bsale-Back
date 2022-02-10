const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/orderby/menor', (req, res) => {
    mysqlConnection.query(`SELECT product.name AS name, product.url_image AS url_image, product.price AS price, product.discount AS discount, category.name AS category FROM product INNER JOIN category ON product.category=category.id ORDER BY product.price ASC`, (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

router.get('/orderby/mayor', (req, res) => {
    mysqlConnection.query(`SELECT product.name AS name, product.url_image AS url_image, product.price AS price, product.discount AS discount, category.name AS category FROM product INNER JOIN category ON product.category=category.id ORDER BY product.price DESC`, (err, rows, fields) => {
         if(!err){
             res.json(rows);
         }else{
             console.log(err);
         }
     })
})
router.get('/orderby/descuento', (req, res) => {
    mysqlConnection.query(`SELECT product.name AS name, product.url_image AS url_image, product.price AS price, product.discount AS discount, category.name AS category FROM product INNER JOIN category ON product.category=category.id ORDER BY product.discount DESC`, (err, rows, fields) => {
         if(!err){
             res.json(rows);
         }else{
             console.log(err);
         }
     })
})

router.get('/orderby/alfabetico', (req, res) => {
    mysqlConnection.query(`SELECT product.name AS name, product.url_image AS url_image, product.price AS price, product.discount AS discount, category.name AS category FROM product INNER JOIN category ON product.category=category.id ORDER BY product.name`, (err, rows, fields) => {
         if(!err){
             res.json(rows);
         }else{
             console.log(err);
         }
     })
})

module.exports = router;