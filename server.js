const express = require("express"); // Packege to get the express object constructor
const bodyParser = require("body-parser");
require("dotenv").config();

const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");

const app = express(); // this function returns an express object which has the capabilities to handle server side requests

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("views", "./views");
app.set("view engine", "ejs");

// Registering the routes
categoryRoutes(app);
productRoutes(app);

const PORT = process.env.PORT; // this will be the port on our local system where server will run

// let content = JSON.parse(fs.readFileSync("config/config.json", "utf-8"));
// content.development.password = process.env.DB_PASS;
// fs.writeFileSync("config/config.json", JSON.stringify(content));

app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  // listen function registers the app for the port
  console.log(`Server started on Port ${PORT}`);
});
