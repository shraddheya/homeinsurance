const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`running on port ${port}`);
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'oursurplus', 'index.html'));
});

