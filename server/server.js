const express = require('express');

const app = express();

app.use(express.json());
app.use('/', require('./route/postRoute'));

app.listen(process.env.PORT);
console.log(`Server on port ${process.env.PORT}`);
