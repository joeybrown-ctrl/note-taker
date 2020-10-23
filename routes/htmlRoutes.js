const path = require("path");

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    // app.get("/reserve", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/reserve.html"));
    // });

    // // If no matching route is found default to home
    // app.get("*", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });
};