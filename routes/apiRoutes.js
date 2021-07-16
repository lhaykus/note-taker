
const fs = require('fs');



module.exports = (app) => {

    //API get request
app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, './db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        res.join(JSON.parse(data));
    });
});

//API post request
app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteId = (noteList.length).toString();

    newNote.id = noteId;
//Push new note to the data containing the other notes
    noteData.push(newNote);
//Write new data to db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
    res.json(noteData);

});


};