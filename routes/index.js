// routes/index.js
const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

// Se llama al middleware.
router.use(horaMiddleware);

router.get('/', (req, res) => {
    const mensajeWellcome = req.query.mensajeWellcome || "¡Bienvenido!";
    res.send(`
        <body>
            <h1>${mensajeWellcome}</h1>
            <h3>Hora Actual: ${req.currentHour}</h3>
            <br><p>Para continuar dar click al botón.</p></br>
            <a href="/endroute">
                <button>Ruta Final</button>
            </a>
        </body>
    `);
});

module.exports = router;


// const getHoraMiddleware = (req, res, next) => {
//         // console.log("Middleware esta ESCUCHANDO");
//         const date = new Date(); //peticion hora actual.
//         const currentHour = `${date.getHours()}:${date.getMinutes()}`; //horas y minuto en un solo string.
//         req.currentHour = currentHour; 
// }