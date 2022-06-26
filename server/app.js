const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/users.route');

const app = express();

app.use(cors());
app.use(express.json());

// users route
app.use('/users', userRouter);

// home route
app.get('/', (req, res) => {
    res.send('<h1>Hello, BlogMania server side is working!</h1>');
});

// route not found
app.use((req, res, next) => {
    res.status(404).json({ message: 'route not found' });
});

// server error
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'something went wrong!' });
});

module.exports = app;
