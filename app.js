// ==========><>|Imports|<><==========

const express = require('express');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/home-route');
const bodyParser = require('body-parser')

require('dotenv/config');

// ==========><>|Imports|<><==========

// ==========><>|Uses|<><==========

const app = express()
app.use(bodyParser.json())

// ==========><>|Uses|<><==========

// ==========><>|Routes List|<><==========

app.use("/", homeRoutes)

// ==========><>|Routes List|<><==========

// ==========><>|Server run|<><==========

mongoose.connect(
        process.env.DB_CONNECTION,

        { 
            useUnifiedTopology: false ,
            useNewUrlParser: true 
        },

        () => {
            console.log("Conected")
        }
    )
app.listen(3001);

// ==========><>|Server run|<><==========
