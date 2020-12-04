const express = require('express');
const app = express();
const path = require('path');
//const port = process.env.PORT || 3000;
const port = process.env.PORT || 80;
const pth = path.join(__dirname, 'dist', 'oursurplus');
app.use(express.static(pth));

app.listen(port, () => {
    console.log(`running on port ${port}`);
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(pth, 'index.html'));
});

