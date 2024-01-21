<template>
   <v-card class="mx-auto" title="Search Movies" >
     <v-container>
       <v-text-field ref="title" v-model="movieTitle"  color="primary" label="Movie Title" variant="underlined"></v-text-field>
     
       <v-btn @click="getTitle" color="success">
         Search
         <v-icon icon="mdi-chevron-right" end></v-icon>
       </v-btn>
      </v-container>
     

  <v-sheet class="d-flex align-content-start flex-wrap bg-surface-variant">
        <div class="ma-2 pa-2" v-for="movie in movies">
          <v-card 
          :id="movie.movie_id"  
          :title="movie.title" 
          class="mx-auto" 
          style="max-width: 100px;">
            <v-img :src="movie.poster_image_url" ></v-img>
            <v-title>{{ movie.title }}</v-title> 
            <v-card-subtitle>Popularity: {{movie.popularity_summary}}</v-card-subtitle>
          </v-card>
        </div>
  </v-sheet>
  </v-card>
 </template>
 <script >

   export default {
      name: 'MovieInfo',
      methods: {
        async getTitle() {
          console.log(`http://localhost:8080/movies?search=${document.getElementsByTagName('input')[0].value}`)
          const movies = await fetch(`http://localhost:8080/movies?search=${document.getElementsByTagName('input')[0].value}`).then(res => res.json())
          console.log(movies)
          this.movies = movies
        },
		},
    data () {
    return {
      movies: [],
      movieTitle:"",
      isActive: false,
      test12345: {}
    }
  },
	}
   
 </script>