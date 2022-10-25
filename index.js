const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

// const courseNames = require('----');
// const course = require('----');

app.get('/', (req, res) => {
    res.send('Brain food server in running.')
})

app.listen(port, () => {
    console.log('Brain food server is running on Port:', port);
})