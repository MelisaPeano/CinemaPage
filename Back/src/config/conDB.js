const mongoose = require("mongoose");

const conDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("conexión exitosa")
    }
   catch(err) {
    console.log("error al conectar con la BD", err.message);
    process.exit(1);
   }
}

module.exports = conDB;