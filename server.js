const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.status(200).send('hello');
});

baseRouter.post('/add', (req, res) => {
    const num1=req.body.first;
    const num2=req.body.second;
    const r=num1+num2;
    res.json({"result":r});
    
});


baseRouter.post('/subtract', (req, res) => {
    const num1=req.body.first;
    const num2=req.body.second;
    const r=num1-num2;
    res.json({"result":r});
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});