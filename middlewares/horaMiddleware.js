//Middleware con la hora actual agregada al    objeto req.
const getHoraMiddleware = (req, res, next) => {
    // console.log("Middleware esta ESCUCHANDO");
    const date = new Date(); //peticion fecha actual.
    const currentHour = `${date.getHours()}:${date.getMinutes()}`; //hrasn y minuto en un solo string.

    req.currentHour = currentHour; //se añade la hora actual al objto req como prpiedad 'currentHour'
    next(); //llama a next para pasar el siguente middleware o ruta en orden.
};

module.exports = getHoraMiddleware;

// // middlewares/horaMiddleware.js
// module.exports = (req, res, next) => {
//     const ahora = new Date();
//     req.horaActual = ahora.getHours();
//     next();
// };




