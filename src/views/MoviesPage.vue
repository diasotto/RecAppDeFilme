<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Catálogo de Filmes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="movies-top">
        <div class="movies-header">
          <div>
            <h2>Catálogo de Filmes</h2>
            <p>{{ filteredMovies.length }} filmes disponíveis</p>
          </div>
          <ion-searchbar
            v-model="search"
            placeholder="Buscar por título ou ano"
            :debounce="250"
          />
        </div>
      </div>

      <div class="movies-container">
        <template v-if="filteredMovies.length">
          <MovieCard
            v-for="movie in filteredMovies"
            :key="movie.id"
            :movie="movie"
          />
        </template>

        <div v-else class="empty-state">
          <ion-icon :icon="searchOutline" />
          <h3>Nenhum filme encontrado</h3>
          <p>Tente ajustar o termo de busca para ver mais opções.</p>
        </div>
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
  IonTitle,
  IonSearchbar,
  IonIcon
} from '@ionic/vue'

import { searchOutline } from 'ionicons/icons'
import { computed, ref } from 'vue'
import MovieCard from '@/componentes/MovieCard.vue'
import { useMovies } from '@/composables/useMovies'

const { movies } = useMovies()
const search = ref('')

const filteredMovies = computed(() => {
  const term = search.value.trim().toLowerCase()
  if (!term) {
    return movies.value
  }

  return movies.value.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(term) ||
      String(movie.year).includes(term)
    )
  })
})
</script>

<style scoped>
.movies-top {
  padding: 16px 16px 0;
}

.movies-header {
  display: grid;
  gap: 16px;
}

.movies-header h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
}

.movies-header p {
  margin: 8px 0 0;
  color: #8b95a1;
}

.movies-container {
  display: grid;
  gap: 16px;
  padding: 0 16px 24px;
}

.empty-state {
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--ion-color-medium-shade);
  gap: 10px;
}

.empty-state ion-icon {
  font-size: 48px;
  color: var(--ion-color-primary);
}

.empty-state h3 {
  margin: 0;
  font-size: 20px;
}

.empty-state p {
  margin: 0;
  max-width: 280px;
}
</style>