//📄 app.js: Contiene el código principal de la aplicación con la configuración de Express, middleware y rutas. (hasta la linea 9 es lo 1ero se incluye obviamente la conexion a PORT)
const express = require('express');
const app = express();
const PORT = 3000;

//Aplicacion en los Middleware y rutas
const router = require('./routes/index');
const horaMiddleware = require ('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const endRoute = require('./routes/endroute');

//Middleware hora que se aplica en todas las rutas.
app.use(horaMiddleware);

//Rutas organizadas. 
app.use('/', router);
app.use('/endroute', validarHora, endRoute);

 /* Es agrupan estos dos middlewares en el mismo (app.use) manteniendo el orden. podria agruparse tambien de la siguiente manera: app.use('/endroute', horaMiddleware, validarHora, endRoute); //porque se ejectan en esa secuencia --> horaMiddleware y validarHora para luego pasar a endRoute si ambos permiten la continuidad segun lo indicado */

app.listen(PORT, () => {
    console.log(`El Servidor está escuchando en el puerto http://localhost:${PORT}/`)
});