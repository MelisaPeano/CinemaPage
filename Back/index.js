
const app = require("./server");
const conDB = require("./conDB/conDB");
require("dotenv").config();



app.listen(8080, async () => {
    try {
        console.log("Servidor corriendo en el puerto 8080");
        await conDB;
    }
    catch(error) {
        console.log("error en index.js", error)
    }
   
})
