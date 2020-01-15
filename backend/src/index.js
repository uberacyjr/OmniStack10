const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

//MongoDB
mongoose.connect('mongodb+srv://root:@root@cluster0-s8hxo.mongodb.net/test?retryWrites=true&w=majority', { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//Vale para todas as requisicoes
app.use(express.json());
app.use(routes);

app.listen(3333);