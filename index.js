import express from 'express';
const app = express() ;
const PORT = process.env.PORT || 5000 ;


 app.get ('/', (req, res)=> {
    res.send('hello world from  express.js ')
 })


 app.get('/about', (req, res) => {
    res.send('about page on express.js')
 })

 app.get('/dashboard', (req, res)=> {
    res.send('dashboard page on express.js')
 })

app.get('/profile', (req, res)=> {
    res.send('welcome to your profile on express.js')
})



 app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`);
 })
