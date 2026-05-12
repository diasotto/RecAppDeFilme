<template>
  <ion-page>
    <ion-content :fullscreen="true" class="welcome-content">
      <div class="container">

        <ion-icon :icon="filmOutline" class="main-icon"></ion-icon>

        <h1>CineVerse</h1>

        <p class="subtitle">
          Seu catálogo de filmes favorito
        </p>

        <ion-item class="input-item">
          <ion-input
            label="Email"
            label-placement="floating"
            placeholder="Digite seu email"
          />
        </ion-item>

        <ion-button
          expand="block"
          size="large"
          class="enter-button"
          @click="enterApp"
        >
          Entrar no App
        </ion-button>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonIcon
} from '@ionic/vue'

import { filmOutline } from 'ionicons/icons'
import { useRouter } from 'vue-router'

const router = useRouter()

function enterApp() {
  router.push('/movies')
}
</script>

<style scoped>
.welcome-content {
  --background: linear-gradient(180deg, #111827, #1f2937);
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  gap: 20px;
}

.main-icon {
  font-size: 90px;
  color: white;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: white;
  font-size: 38px;
  font-weight: bold;
}

.subtitle {
  text-align: center;
  color: #d1d5db;
  margin-bottom: 10px;
}

.input-item {
  border-radius: 14px;
}

.enter-button {
  margin-top: 10px;
  --border-radius: 14px;
  height: 52px;
  font-weight: bold;
}
</style>