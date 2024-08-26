const app = require("./src/server");
const conDB = require("./src/config/conDB");
require('dotenv').config();



try {
    app.listen(3001, async () => {
        console.log(`servidor escuchando en puerto 3001`);
        await conDB();
    })
}
catch(error) {
    console.log(error);
};

// mi servidor está escuchando en el puerto 3000, 
//a traves de el recibe la solicitud. este es el paso  1
// de acá me voy a server.js