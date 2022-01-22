import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello from express! Express is awesome!');
})

app.get('/maria', (req, res) => {
    res.send(`this is maria's`);
})

app.get('/daniela', (req, res) => {
    res.send(`this is daniela's`);
})

app.get('/edward', (req, res) => {
    res.send(`this is edward's`);
})

app.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
