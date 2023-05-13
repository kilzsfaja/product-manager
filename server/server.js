const express = require('express');
const cors = require('cors');
const app = express();
// console.log(app)

// middleware
app.use(cors())
// if you want to set conditions w/ cors
// app.use(cors({
//     origin: "*",
//     methods: ["GET", "POST"]
// }))
app.use(express.json(), express.urlencoded({ extended: true }));

// load .env vars
require('dotenv').config()
// access the .env vars
const port = process.env.PORT

// Require / import the file
// this file doesn't need to export anything
require("./config/mongoose.config")

// require the routes here to run
require("./routes/product.routes")(app)
// const AllMyProductRoutes = require("./routes/product.routes");
// AllMyProductRoutes(app);


app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));
