const express = require("express");
const hRoute = require("./routes/htmlRoutes");
const aRoute = require("./routes/apiRoutes");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;
hRoute(app);
aRoute(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function () {
    console.log("App listening on PORT, http://localhost:" + PORT);
});