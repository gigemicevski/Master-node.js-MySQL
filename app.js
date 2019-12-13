const express = require('express');
const appRouter = require('./router');
const bodyParser = require('body-parser');
const middleware = require('./middlewares/common');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv/config');
const config = require('config');

let options = {};
require("babel-core").transform("code", options);

const app = express();

app.use(morgan('tiny'));;
app.use(helmet())
app.use(middleware.logger);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(appRouter);


app.use(middleware.wrongRoute);
app.use(middleware.errorHandler);

var port = process.env.PORT || 3000;
var server = app.listen(port, () => {
    console.log(`API is listening on port ${port}....`);
});

module.exports = server ;


// if(!config.get('jwtPrivateKey')){
//     console.error('FATAL ERROR jwtPrivate key not defined.');
//     process.exit(1);
// }
