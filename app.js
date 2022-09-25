const express = require("express");
const app = express();
const route = require("./routes/allRoutes");

app.set("view engine","ejs");
app.listen(3000);
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))

app.use(route);
