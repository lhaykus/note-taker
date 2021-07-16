
const fs = require('fs');
const noteData = require("../db/db.json");
//Found on https://www.npmjs.com/package/uniqid
//Gives unique id to each note 
const uniqid = require('uniqid');


module.exports = (app) => {

//GET request

    app.get("/api/notes", (req, res) => {
        //let db = Read data from db.json and parse into json format to read
        let db = JSON.parse(fs.readFileSync('./db/db.json'));
        //responds in json for all db
        res.json(db);
    });


//POST request

    app.post("/api/notes", (req, res) => {
        //let notes = Read data from db.json and parse into json format to read
        let notes = JSON.parse(fs.readFileSync('db/db.json'));
        //responds in json for all notes
        res.json(notes);

        //Creating new notes title, text, and id
        const newNotes = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };

        //Pushing the newNotes into the notes array
        notes.push(newNotes);
        //Writing the db.json file and stringify the data to store as a string
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        //respond back with all notes from database
        res.json(notes);
    });

};
