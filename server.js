const express = require("express");
const hRoute = require("./routes/htmlRoutes");
const aRoute = require("./routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

aRoute(app);
hRoute(app);

app.listen(PORT, function () {
    console.log("App listening on PORT, http://localhost:" + PORT);
});