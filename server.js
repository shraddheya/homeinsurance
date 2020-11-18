const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/dist'));

app.listen(port, () => {
    console.log(`running on port ${port}`);
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'oursurplus', 'index.html'));
});

 