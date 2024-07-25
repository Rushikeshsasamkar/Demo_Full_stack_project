import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
const [jokes, setJokes] = useState([])

useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    console.log(response);
    setJokes(response.data);
  })
  .catch((err)=>{
    console.log(err);
  })
},[])

  return (
    <>
      <h1>Welcome to the application</h1>
      <p>Jokes:{jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={index}>

            <p>{index+1}.   {joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
