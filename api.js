// Como requisitar uma API em Node.js
// Alguns packages: axios, superagent, node-fetch

// axios:

// npm install axios

const axios = require('axios')

// Forma de requisitar uma API padrão

axios.get('http://www.omdbapi.com/?t=it&apikey=e83a2b4b')
  .then((response) => {
    const movie = response.data
    console.log(movie.Ratings[2].Value)
  })
  .catch((error) => {
    console.log(error)
  })

// Instance of axios:
 
const api = axios.create({
  baseURL: 'https://api.github.com',
})

api.get('/users/snarloff')
  .then((response) => {
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })

// async/await:

try {
  const response = await axios.get('http://www.omdbapi.com/?t=it&apikey=e83a2b4b')
  console.log(response)
} catch (error) {
  console.log(error)
}
