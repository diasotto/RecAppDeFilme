<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>

        <ion-buttons slot="start">
          <ion-back-button default-href="/movies"></ion-back-button>
        </ion-buttons>

        <ion-title>
          Detalhes
        </ion-title>

      </ion-toolbar>
    </ion-header>

    <ion-content>

      <div v-if="movie" class="details-container">

        <h1>{{ movie.title }}</h1>

        <ion-chip :class="ratingClass(movie.rating)">
          <ion-label>
            {{ movie.rating }}
          </ion-label>
        </ion-chip>

        <h3>Ano</h3>
        <p>{{ movie.year }}</p>

        <h3>Sinopse</h3>
        <p>{{ movie.description }}</p>

        <ion-button
          expand="block"
          @click="goBack"
        >
          Voltar para Lista
        </ion-button>

      </div>

    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonChip,
  IonLabel,
  IonButtons,
  IonBackButton
} from '@ionic/vue'
import { useMovies } from '@/composables/useMovies'

const route = useRoute()
const router = useRouter()
const { movies } = useMovies()

const movie = computed(() => {
  return movies.value.find(
    movie => movie.id === Number(route.params.id)
  )
})

function goBack() {
  router.push('/movies')
}

function ratingClass(rating: string) {
  switch (rating) {
    case 'Livre':
      return 'livre'

    case '12+':
      return 'doze'

    case '16+':
      return 'dezesseis'

    case '18+':
      return 'dezoito'

    default:
      return ''
  }
}
</script>

<style scoped>
.details-container {
  padding: 24px;
}

h1 {
  font-size: 34px;
  font-weight: bold;
}

h3 {
  margin-top: 24px;
  font-weight: bold;
}

p {
  color: #444;
  line-height: 1.6;
}

ion-button {
  margin-top: 30px;
  --border-radius: 14px;
}

.livre {
  --background: #2ecc71;
  color: white;
}

.doze {
  --background: #f39c12;
  color: white;
}

.dezesseis {
  --background: #e74c3c;
  color: white;
}

.dezoito {
  --background: black;
  color: white;
}
</style>