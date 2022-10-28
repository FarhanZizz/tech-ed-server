const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())
const categories = require('./data/categories.json');
const courses = require('./data/courses.json')
app.get('/', (req, res) => {
    res.send(courses)
});
app.get('/categories/', (req, res) => {
    res.send(categories)
})

app.get('/categories/:id', (req, res) => {
    const category_id = req.params.id;
    const selected_courses = courses.filter(c => c.category_id === category_id);
    res.send(selected_courses)
})
app.get('/courses/:id', (req, res) => {
    const course_id = req.params.id;
    const courseDetails = courses.find(course => course.id === course_id);
    res.send(courseDetails)
})
app.listen(port, () => {
    console.log('running on port ', port)
})