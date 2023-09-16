const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const leakRoutes = require("./routes/leaks");
app.use(leakRoutes);

const pagesRoutes = require("./routes/pages");
app.use(pagesRoutes);

app.listen(3000, () => console.log("The server started running on port 3000"));
