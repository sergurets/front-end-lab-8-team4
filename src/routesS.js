const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
