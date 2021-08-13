const path = require('path');
const fs = require('fs');
const mode = process.env.NODE_ENV || 'production';
const port = process.env.NODE_PORT || '3008';
console.log("the mode is ",mode);
const dirName = mode === 'production' ? 'build' : 'public' || 'build';
console.log("the dirName is ", path.join(__dirname, dirName));
const fileLive = path.join(__dirname, '/.live');
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, dirName)));
app.use(express.static(dirName));


app.get('/ping', (req, res) => {
    return res.send('pong')
})


app.use('/healthcheck', (req, res) => {
    if (fs.existsSync(fileLive)) {
        res.end('Live\n');
    } else {
        res.statusCode = 404;
        res.end('Dead\n')
    }
});
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// start express server on port Port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});