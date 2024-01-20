const fetch = require('node-fetch');
const express = require('express');
require('dotenv').config()
var cors = require('cors')

const app = express ();
app.use(express.json());
app.use(cors())
const PORT = 8080;
const api_key = process.env.api_key

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

  //Is the server running function?
  app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });

 //Initialize the call to TMDB
app.get('/movies', (request,response) => {
    //If not search query is present
    if ( !request.query.hasOwnProperty('search') ) {
        response.send( {"Error":"You must include a search query parameter"})
    }
//save the search query parameter to a variable
let queryTerm = request.query.search
tmdbURL = `https://api.themoviedb.org/3/search/movie?accept=application/json&query=${queryTerm}&api_key=${api_key}&include_adult=false&language=en-US&region=US`
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
};
//perform the fetch
fetch(tmdbURL, options)
  .then(res => res.json())  
  .then(tmdbJson => {
    //build a response object
    console.log(tmdbJson)
    let responseJson = []
    while (responseJson.length < 10) {
    tmdbJson.results.slice(0, 10).forEach(movie => {
        //calculate the popularity summary
            popularity_summary = Math.round(movie.vote_count*(movie.popularity/100))
            responseJson.push({
                'movie_id':movie.id,
                'title':movie.title,
                'poster_image_url':`https://image.tmdb.org/t/p/original/${movie.poster_path}`,
                'populatiry':`${popularity_summary} out of ${movie.vote_count}`})

        });
    }
    //send the response to the frontend
    response.send(responseJson)
  })
  .catch(err => console.error('error:' + err));
 })