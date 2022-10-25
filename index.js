const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Brain food server in running.')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === '09') {
        res.send(courses)
    } else {
        const selectedCourse = courses.find(course => course.id === id);
        res.send(selectedCourse);
    }
})

app.listen(port, () => {
    console.log('Brain food server is running on Port:', port);
})