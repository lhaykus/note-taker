//Required packages
const express = require('express');
const path = require('path');
const fs = require('fs');

//Create app object
const app = express();

//Create PORT 
const PORT = process.env.PORT || 3001;

//Set up express app to grab data
app.use(express.urlencoded({ extended: true }));
//Creating route for every static file in public folder
app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

    //Get request for notes.html
 app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/notes.html"));

    });

        //Get request if no matching route to go to homepage
 

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



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));

});









//Routes to tell server how to respond when user visits or request data from URLs
//require('./routes/apiRoutes')(app);
//require('./routes/htmlRoutes')(app);

//Starting our server to listen
app.listen(PORT, () =>  console.log(`Server is avaliable at http://localhost:${PORT}`));
