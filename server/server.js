const express = require('express');
require('./database');
const app = express();

app.use(express.json());

app.use('/', require('./route/userRoute'));

app.listen(3030);
