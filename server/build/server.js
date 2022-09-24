import express from 'express';
const app = express();
app.get('/', (req, res) => {
    return res.json('hello');
});
app.get('/api', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => console.log('listening on port 3000'));
