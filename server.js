const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Replace body-parser

app.post('/convert-sermon', (req, res) => {
    const { sermonText, styleName } = req.body;
    const converted = `Converted ${sermonText} with style ${styleName}`;
    res.json({ converted });
});

app.post('/save-style', (req, res) => {
    const { sermonText, converted, styleName } = req.body;
    res.json({ message: 'Style saved successfully' });
});

app.post('/clear-style', (req, res) => {
    const { styleName } = req.body;
    res.json({ message: `Style ${styleName} cleared` });
});

app.post('/backup', (req, res) => {
    res.json({ message: 'Backup created successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));