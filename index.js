import express from "express";


const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('users are comming soon!!')
})

const users = [
    {id: 1, name:'Bappi', email:'bappionfire@gmail.com'},
    {id: 1, name:'Maruf', email:'marufonfire@gmail.com'},
    {id: 1, name:'Omor', email:'omoronfire@gmail.com'},
    {id: 1, name:'Jahid', email:'jahidonfire@gmail.com'},
    {id: 1, name:'Samiul', email:'samiulonfire@gmail.com'}
]

app.get('/users', (req, res) => {
    res.send(users)
})


app.listen(port , () => {
    console.log(`server is runnign on port: ${port}`);
})