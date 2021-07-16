//Required packages
const express = require('express');

//Create app object
const app = express();

//Create PORT 
const PORT = process.env.PORT || 3001;

//Creating route for every static file in public folder
app.use(express.static('public'));
//Set up express app to grab data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes to tell server how to respond when user visits or request data from URLs
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Starting our server to listen
app.listen(PORT, () =>  console.log(`Server is avaliable at http://localhost:${PORT}`));
