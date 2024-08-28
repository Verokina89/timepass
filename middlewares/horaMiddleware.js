// Middleware para agregar la hora actual al objeto req
const getHoraMiddleware = (req, res, next) => {
    const date = new Date();
    req.currentHour = date.getHours();  // Usamos solo las horas (de 0 a 23)
    next();
};

module.exports = getHoraMiddleware;

// // middlewares/horaMiddleware.js
// const horaMiddleware = (req, res, next) => {
//     const date = new Date(); 
//     const hours = String(date.getHours()).padStart(2, '0'); // Asegura que las horas tengan dos dígitos
//     const minutes = String(date.getMinutes()).padStart(2, '0'); // Asegura que los minutos tengan dos dígitos
//     req.currentHour = `${hours}:${minutes}`; // Formato de hora y minutos juntos (HH:MM)
//     next(); 
// };

// module.exports = horaMiddleware;


//Middleware con la hora actual agregada al    objeto req.
// const getHoraMiddleware = (req, res, next) => {
//     // console.log("Middleware esta ESCUCHANDO");
//     const date = new Date(); //peticion hora actual.
//     const currentHour = `${date.getHours()}:${date.getMinutes()}`; //horas y minuto en un solo string.
//     req.currentHour = currentHour; //se añade la hora actual al objto req como prpiedad 'currentHour'
//     next(); //llama a next para pasar el siguente middleware o ruta en orden.
// };


// const getHoraMiddleware = (req, res, next) => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const formattedTime = `${hours}:${minutes}`;
//     const currentHour = formattedTime;
//     req.currentHour = `${formattedTime}`;
//     next()
// }; problema con los minutos.

// module.exports = getHoraMiddleware;


