const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0-1ht5i.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
})

app.use(require('./routes'));

app.listen(3333);