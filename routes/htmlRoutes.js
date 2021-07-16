const path = require('path');



module.exports = (app) => {


    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    //Get request for notes.html
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    
    });
    
    //Get request if no matching route to go to homepage
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    
    });

};

