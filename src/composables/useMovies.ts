import { ref } from 'vue'

export const movies = ref([
  {
    id: 1,
    title: 'Interestelar',
    year: 2014,
    rating: '12+',
    description: 'Exploradores viajam pelo espaço em busca de um novo lar para a humanidade.'
  },
  {
    id: 2,
    title: 'Batman: O Cavaleiro das Trevas',
    year: 2008,
    rating: '16+',
    description: 'Batman enfrenta o caos causado pelo Coringa em Gotham City.'
  },
  {
    id: 3,
    title: 'Toy Story',
    year: 1995,
    rating: 'Livre',
    description: 'Brinquedos ganham vida quando ninguém está olhando.'
  },
  {
    id: 4,
    title: 'Deadpool',
    year: 2016,
    rating: '18+',
    description: 'Um anti-herói sarcástico busca vingança após um experimento.'
  }
])

export function useMovies() {
  return {
    movies
  }
}