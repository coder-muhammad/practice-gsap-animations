const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;

app.get("/", (req, res) => {
    res.send({path: path.join(__dirname, 'public', 'index.html')});
});

app.listen(PORT, () => {
    console.log("Server is up and running..");
});
