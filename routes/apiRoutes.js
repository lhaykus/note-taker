
const fs = require('fs');
const noteData = require("../db/db.json");
//Found on https://www.npmjs.com/package/uniqid
//Gives unique id to each note 
const uniqid = require('uniqid');


module.exports = (app) => {

//GET route
//Displays the data in the db.json
    app.get("/api/notes", (req, res) => {
        //Reads db/db.json file and parses the object into string to read
        let db = JSON.parse(fs.readFileSync('./db/db.json'));
        //responds with db parsed as a string
        res.json(db);
    });


//POST route for api
    app.post("/api/notes", (req, res) => {
        //create notes to read the .db.json file and parses the object into strings
        let notes = JSON.parse(fs.readFileSync('db/db.json'));
        //responds with notes pasrsed as a string
        res.json(notes);

        //Creating new notes title, text, and id
        const newNotes = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };

        //Pushing the newNotes into the notes objects
        notes.push(newNotes);
        //Writing the db.json file from objects into strings 
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        //Responsing with the notes converted to json strings
        res.json(notes);
    });

};
