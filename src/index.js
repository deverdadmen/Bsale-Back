//Se utiliza para llamar al config solo cuando nos encontremos en desarrollo
if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}

const exprees = require('express');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');

//Inisilizacion
const app = exprees();
//require('./database');

//Configuracion
app.set('port', process.env.PORT || 3000); // se utilizara un purto por defecto en este caso 3000 o el host entregara uno

//Middlewares
app.use(exprees.json());
app.use(morgan('dev')); //nos va dando reportes mientras se hacen consultas en desarrollo
app.use(cors(config.application.cors.server)); //configuraciones de cors

//Rutas
app.use(require('./routes/product'));
app.use(require('./routes/category'));
app.use(require('./routes/orderby'));

//Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado')
});
