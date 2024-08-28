// middlewares/validarHora.js.
const validarHora = (req, res, next) => {
    if (req.currentHour >= 12 && req.currentHour <= 24) {
        return next(); // Continuar al siguiente middleware/ruta si la condición es verdadera.
    }
    
    // Redirigir con el mensaje si la condición es falsa.
    const mensaje = "⚠️ Error 404 ⚠️. Aún NO es la HORA, espera hasta las 12:00 para poder Entrar.";
    return res.redirect('/?mensaje=' + encodeURIComponent(mensaje));
};

module.exports = validarHora;


// const validarHora = (req, res, next) => {
//     console.log("Hora actual en validarHora:", req.currentHour);

//     if (req.currentHour >= 12 && req.currentHour <= 24) {  
//         next(); 
//         const mensaje = "⚠️  Error 404 ⚠️. Aún NO es la HORA, espera hasta la 12:00 para poder Entar."
//         return res.redirect('/?mensaje=' + encodeURIComponent(mensaje));
//     }
// };

// module.exports = validarHora;

/*
res.locals es un objeto que permite pasar datos a la plantilla (view) que se va a renderizar. Aquí, estamos asignando el mensaje de error a res.locals.mensaje para que se pueda mostrar en la página.

return res.redirect('/?mensaje=' + encodeURIComponent(mensaje));
Esta línea redirige al usuario de vuelta a la página principal (o a una página específica) y pasa el mensaje de error como un parámetro de consulta (query parameter) en la URL. encodeURIComponent(mensaje) asegura que el mensaje esté correctamente codificado en la URL.
*/