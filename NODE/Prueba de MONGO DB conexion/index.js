// const express = require("express");
// const dotenv = require("dotenv");
// const { connect } = require("./src/utils/db");

// // creamos el servidor web
// const app = express();

// // vamos a configurar dotenv para poder utilizar las variables d entorno del .env
// dotenv.config();

// //! conectamos con la base de datos
// connect();

// //! -----------------VARIABLES CONSTANTES --> PORT

// const PORT = process.env.PORT;

// //! ------------------ limitaciones de cantidad en el back end
// app.use(express.json({ limit: "5mb" }));
// app.use(express.urlencoded({ limit: "5mb", extended: false }));

// //! ------------------ ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB-----

// app.listen(PORT, () =>
//   console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
// );

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

/// CREAR SEERVER WEB
const app = express();

// TRAER DEL ENV LA VARIABLE DE ENTORNO DEL PORT

const PORT = process.env.PORT;
console.log(PORT);

// CORS --> CONFIGURAR EL QUE SE PUEDE HACER EN EL BACK ASI COMO EL ACCESO
app.use(cors());

//! ------------------ limitaciones de cantidad en el back end
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//! ------------------ ROUTAS DE LA APP -------------------------

//! -----------------  ERRORES GENERALES Y RUTA NO ENCONTRADA

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

// ----- en este caso como gestionamos un error la callback lleva de parametros error, req, res
// cuando es un controlador normal llevaria siempre como para parametros REQ, RES, NEXT ---> en este orden siemppre
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

//! ------------------ ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB-----

// esto de aqui  nos revela con que tecnologia esta hecho nuestro back
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);
