// middlewares/validarHora.js
const validarHora = (req, res, next) => {    //Pasan los 3 parametros;objeto de solicitud, objto respuesta, y nex; funcon para pasar l siguente middleware.
    if (req.currentHour >= 12 && req.currentHour <= 24) {  //Condicionales.Verficar hora actual 'req.currentHour' (viene del middleware anterior "horaMiddleware") comprendido entre las 12 y las 24.
        next(); //Si la condicion IF es verdadera pasa al siguiente middleware, es decir, el usuario puede acceder o contnuar a la siguente.
    } else {
        const mensaje = "⚠️  Error 404 ⚠️. Aún NO es la HORA, espera hasta la 12:00 para poder Entar."
        return res.redirect('/mensaje=' + encodeURIComponent(mensaje));
    }
};

module.exports = validarHora;



// module.exports = (req, res, next) => {
//     if (req.currentHour >= 12 && req.horaActual <= 24) {
//         next();
//     } else {
//         const mensaje = "Aún no es la hora, espera hasta las 12:00 para entrar";
//         res.locals.mensaje = mensaje;
//         return res.redirect('/?mensaje=' + encodeURIComponent(mensaje));
//     }
// };
