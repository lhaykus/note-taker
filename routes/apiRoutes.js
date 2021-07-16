const fs = require('fs');
const { title } = require('process');
const data = require('../db/db.json');

module.exports = (app) => {

    //API get request
    app.get('/api/notes', (req, res) => {
        res.json(data);
      //  fs.readFile("./db/db.json", "utf8", function(err, data) {
       //     res.json(JSON.parse(data));
      //  });

    });

    //API post request
    app.post("/api/notes", (req, res) => {
        const newNote = {
            id: data.length + 1,
            title: req.body.title,
            text: req.body.text,
        };
        data.push(newNote);
        res.json(data);

       /* fs.readFile('./db/db.json', 'utf8', function(err, data) {
            const data = JSON.parse(data);
            data.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(data), function(err) {
                if (err) throw err;
            });
            console.log(`Note written!`);
        });
        res.json(newNote);*/
    });




}