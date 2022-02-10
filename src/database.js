const mysql = require('mysql')



const mysqlConnection = mysql.createConnection({
    
    host: process.env.DB_Host,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,

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