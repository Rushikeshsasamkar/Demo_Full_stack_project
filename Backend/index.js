import express from 'express';
const app = express();
const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      id: 2,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      id: 3,
      joke: "Why don't programmers like nature? It has too many bugs."
    },
    {
      id: 4,
      joke: "What do you get when you cross a snowman and a vampire? Frostbite."
    },
    {
      id: 5,
      joke: "Why did the math book look sad? Because it had too many problems."
    },
    {
      id: 6,
      joke: "Why was the computer cold? It left its Windows open."
    },
    {
      id: 7,
      joke: "Why did the bicycle fall over? Because it was two-tired!"
    },
    {
      id: 8,
      joke: "What do you call fake spaghetti? An impasta!"
    },
    {
      id: 9,
      joke: "Why do cows have hooves instead of feet? Because they lactose."
    },
    {
      id: 10,
      joke: "Why did the tomato turn red? Because it saw the salad dressing!"
    }
  ];

app.use(express.static('dist'));


// app.get('/',(req,res)=>{
//     res.send('server is ready')
// })


app.get('/api/jokes',(req,res)=>{
    res.send(jokes);
})

const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`server running at https://localhost/${port}`);
})