const express = require('express');
const app = express();
let server = require('http').Server(app);

const dataTest = {
    "error": false,
    "message": "Success",
    "data": [
        {
            key: "full_name",
            value: "Nhã nè",
        },
        {
            key: "full_name",
            value: "nha@gmail.com"

        }
    ]
}

app.get('/', (req, res) => {
    res
        .status(200)
        .json(dataTest)
        .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});