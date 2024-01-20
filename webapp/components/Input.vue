<template>
   <v-card
     class="mx-auto"
     max-width="344"
     title="Search Movies"
   >
     <v-container>
       <v-text-field
        id="title"
         color="primary"
         label="Movie Title"
         variant="underlined"
       ></v-text-field>
     </v-container>
     <v-card-actions>
       <v-spacer></v-spacer>
       <v-btn @click="fetchData" color="success">
         Search
         <v-icon icon="mdi-chevron-right" end></v-icon>
       </v-btn>
     </v-card-actions>
   </v-card>
 </template>
 <script>
   export default {
      name: 'MovieInfo',
      
      methods: {
		fetchData() {
			fetch(`http://localhost:8080/movies?search=${document.getElementById('title').value}`, {
				method: 'GET',
            headers: {'Access-Control-Allow-Origin':'*'}
			})
				.then(response => {
					response.json().then(res => {
                  console.log(res)
                  this.$emit("movies", res);
                  // this.movies = res
                  
               });
				})
				.catch(err => {
					console.error(err);
				});
		},
      data () {
         return {movies: []}
      }
	}
   }
 </script>