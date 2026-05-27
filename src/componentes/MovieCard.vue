<template>
  <ion-card class="movie-card" button @click="goToDetails">
    <ion-card-header>
      <ion-card-title>
        {{ movie.title }}
      </ion-card-title>

      <ion-card-subtitle>
        {{ movie.year }}
      </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <div :class="ratingClass(movie.rating)" class="rating-tag">
        {{ movie.rating }}
      </div>
    </ion-card-content>
  </ion-card>
</template>
<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/vue'

import { useRouter } from 'vue-router'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const router = useRouter()

function goToDetails() {
  router.push({ name: 'MovieDetails', params: { id: String(props.movie.id) } })
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
.movie-card {
  border-radius: 18px;
  transition: 0.2s;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
}

.movie-card:hover {
  transform: scale(1.02);
}

.rating-tag {
  width: fit-content;
  padding: 8px 14px;
  border-radius: 12px;
  color: white;
  font-weight: bold;
}

.livre {
  background: #2ecc71;
}

.doze {
  background: #f39c12;
}

.dezesseis {
  background: #e74c3c;
}

.dezoito {
  background: #000;
}
</style>