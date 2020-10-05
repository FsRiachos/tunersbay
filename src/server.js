require('./configs/mongodb.js').connectDB()
    .then(() => {
        console.log('Connected successfully to database server');

        const express = require("express");
        const bodyParser = require("body-parser");
        const cors = require('cors');

        const buildRoute = require('./routes/build-route.js');

        const app = express();

        app.use(bodyParser.json());
        app.use(cors());

        app.use("/hello", (req, res) => res.send('HELLO WORLD'));
        app.use('/build', buildRoute);

        const port = process.env.port || 3000;
        app.listen(port, () => {
            console.log(`\x1b[32m(PLAIN) Server listening on port ${port}\x1b[0m.`)
        });

    })
    .catch(err => {
        console.error('Unable to connect to databse server :', err.message);
    });