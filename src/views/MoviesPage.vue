<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>
          Catálogo de Filmes
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <div class="movies-container">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>

    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/vue'

import MovieCard from '@/componentes/MovieCard.vue'
import { useMovies } from '@/composables/useMovies'

const { movies } = useMovies()
</script>

<style scoped>
.movies-container {
  padding: 16px;
}
</style>