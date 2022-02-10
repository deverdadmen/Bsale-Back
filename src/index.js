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
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(exprees.json());
app.use(morgan('dev'));
app.use(cors(
    config.application.cors.server
  ));

//Rutas
app.use(require('./routes/product'));
app.use(require('./routes/category'));
app.use(require('./routes/orderby'));

//Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado')
});
