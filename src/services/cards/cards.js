import { database } from '../firebase'
import { ref, get } from 'firebase/database'

const getCardsByUserId = async (uid) => {
  const cards = ref(database, `/${uid}`)
  const value = await get(cards)
  return JSON.parse(value.val())
}

export const Cards = {
  getCardsByUserId
}
