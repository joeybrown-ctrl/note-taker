const fs = require("fs");
const UUID = require("uuid");

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        fs.readFile('./db/db.json', "utf8", (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            return res.json(notes);
        });
    })

    app.post("/api/notes", (req, res) => {
        req.body.id = UUID.v1()
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            let noteSum = JSON.parse(data);
            noteSum.push(req.body);

            fs.writeFile('./db/db.json', JSON.stringify(noteSum), (err) => {
                if (err) throw err;
                res.json(req.body);
            });
        })
    })

    app.delete("/api/notes/:id", (req, res) => {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            let noteSum = JSON.parse(data);
            noteSum = noteSum.filter(note => note.id !== req.params.id)

            fs.writeFile('./db/db.json', JSON.stringify(noteSum), (err) => {
                if (err) throw err;
                res.json("Success!");
            });
        })
    });

};