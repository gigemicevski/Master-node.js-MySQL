const express = require('express');
const appRouter = require('./router');
const bodyParser = require('body-parser');
const middleware = require('./middlewares/common');
const morgan = require('morgan');
// const config = require('config');
require('dotenv/config');

const app = express();

// if(!config.get('jwtPrivateKey')){
//     console.log('FATAL ERROR JWTPrivate key not defined.');
//     process.exit(1);
// }

app.use(morgan('tiny'));
app.use(middleware.logger);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(appRouter);


app.use(middleware.wrongRoute);
app.use(middleware.errorHandler);

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API is listenig on port ${port}....`);
});