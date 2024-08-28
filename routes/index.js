// routes/index.js
const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

router.use(horaMiddleware);

router.get('/', (req, res) => {
    const mensaje = req.query.mensaje || "¡Bienvenido!";
    res.send(`
        <body>
            <h1>${mensaje}</h1>
            <h3>Hora Actual: ${req.currentHour}</h3>
            <a href="/endroute">
                <button>Ruta Final</button>
            </a>
        </body>
    `);
});

module.exports = router;
