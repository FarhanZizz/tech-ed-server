const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())
const categories = require('./data/categories.json')
app.get('/', (req, res) => {
    res.send('api running')
});
app.get('/categories/', (req, res) => {
    res.send(categories)
})
app.get('/categories/:id', (req, res) => {
    const category_id = req.params.id;
    console.log(category_id)
})
app.listen(port, () => {
    console.log('running on port ', port)
})