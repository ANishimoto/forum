const dotenv = require('dotenv');
const express = require('express');

dotenv.config('/.env');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server on, listening port: ${process.env.PORT || 8080}`);
});