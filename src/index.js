const exprees = require('express');
const app = exprees();

//Configuracion
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(exprees.json());

//Rutas
app.use(require('./routes/product'));

//Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado')
});
