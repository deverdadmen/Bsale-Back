const mysql = require('mysql')


const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,  //direccion de host
    user: process.env.DB_USER,  // user de acceso
    password: process.env.DB_PASSWORD, // clave de acceso
    database: process.env.DB_DATABASE, // base de datos a la cual se realizaran las consultas
});

mysqlConnection.connect( function (err) {
    if(err) {
        console.log(err);
        return;
    }else{
        console.log('Conectado al DB')
    }
});


module.exports = mysqlConnection;