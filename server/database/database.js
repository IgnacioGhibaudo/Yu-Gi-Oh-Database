const mongoose = require('mongoose');

module.exports = (async () => {
try {const db = await mongoose.connect("mongodb://localhost/ygo_db");
console.log("Database connected to", db.connection.name)
}
catch(error){
    console.log(error);
}} )