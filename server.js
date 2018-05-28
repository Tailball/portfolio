//Third party imports
const express = require('express');

//App imports
const logger = require('./middleware/logger');
const contact = require('./routes/contact');

const app = express();

//Middleware
app.use(logger);

//Routing - Static
app.use('/', express.static('./client/build'));

//Routing - Api
app.use('/api/contact', contact);

//Config and boot
const port = 3000;
app.listen(3000, () => console.log('Server now up and running'));