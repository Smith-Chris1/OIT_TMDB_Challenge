<template>
  <v-app dark>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
   </v-main>
   <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >

    <div class="pt-0">
      BYU Framework Code Challenge
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Search for any movie title</strong>
    </div>
    <div>
      <strong>Results come from <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
            TMDB
            </a></strong>
    </div>
    <div>
      <strong><a
            href="mailto:christopher.erick.smith@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </a></strong>
    </div>
  </v-footer>
  
  </v-app>
  
         
</template>

