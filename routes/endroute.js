// routes/endroute.js
const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora');
const horaMiddleware = require('../middlewares/horaMiddleware');

//Aplicamos middlewares.
router.use(horaMiddleware);
router.use(validarHora);

router.get('/', (req, res) => {
    const mensajeWellcome = req.query.mensajeWellcome || "¡Bienvenido!";
    res.send(`
        <body>
            <h1>${mensajeWellcome} estas en la Ruta Final</h1>
            <h3>Has llegado al Final de la Ruta.</h3>
            <h4><br>Hora Actual: ${req.currentHour}</br></h4>  <!--Muestra la hora con los minutos-->
            <a href="/">
                <button>Home</button></br>
             </a>
        </body>
    `);

});

module.exports = router;
