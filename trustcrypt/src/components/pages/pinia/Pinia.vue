<script setup>
import {useMovieStore} from "./stores/MovieStore.js";
import Movie from "./components/pages/pinia/Movie.vue";

const movieStore = useMovieStore()
</script>

<template>
  <div class="tabs">
    <button :class="['btn',{btn_green:movieStore.activeTab === 1}]" @click="movieStore.setActiveTab((1))">Favorite
    </button>
    <button :class="['btn',{btn_green:movieStore.activeTab === 2}]" @click="movieStore.setActiveTab((2))">Search
    </button>
  </div>
  <div class="movies" v-if="movieStore.activeTab ===1">
    <div>
      <h3>Watched Movies (count: {{ movieStore.watchedMovies.length }})</h3>
      <Movie v-for="movie of movieStore.watchedMovies "
             :key="movie.id"
             :movie="movie"
      />
    </div>
    <h3>All Movies (count: {{ movieStore.movies.length }})</h3>
    <Movie v-for="movie of movieStore.movies "
           :key="movie.id"
           :movie="movie"
    />
  </div>
  <div class="search" v-else>Search</div>
</template>

<style scoped lang="scss">
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}

.btn:hover {
  opacity: 0.7;
}

.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>