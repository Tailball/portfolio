//Third party imports
const express = require('express');

//App imports
const logger = require('./middleware/logger');
const contact = require('./routes/contact');

const app = express();

//Middleware
app.use(logger);

//Routing
app.use("/", express.static("./client/build"));

//Static
app.get('/', (req, res) => {
  res.send('helloooo');
});

//Config and boot
const port = 3000;
app.listen(3000, () => console.log('Server now up and running'));