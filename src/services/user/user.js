import { database, auth } from '../firebase'
import { ref, get, set } from 'firebase/database'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const listUsers = async () => {
  const url = ref(database, `/user`)
  const value = await get(url)
  if (value.exists()) {
    const users = value.val()
    return Object.keys(users).map((key) => ({
      ...users[key],
      cards: users[key].role === 'admin' ? [] : JSON.parse(users[key].cards)
    }))
  } else {
    return []
  }
}

const createUser = async (body) => {
  const userCredential = await createUserWithEmailAndPassword(auth, body.email, '0123321')
  const uid = userCredential.user.uid
  const url = ref(database, `/user/${uid}`)
  const user = {
    ...body,
    cards: [],
    createdAt: new Date().toISOString(),
    id: uid
  }

  await set(url, user)
}

const getUserById = async (uid) => {
  const url = ref(database, `/user/${uid}`)
  const value = await get(url)
  return value.val()
}

const updateUserById = async (uid, body) => {
  const url = ref(database, `/user/${uid}`)
  return await update(url, { body })
}

const deleteUserById = async (uid) => {
  const url = ref(database, `/user/${uid}`)
  return await push(url, null)
}

export const User = {
  listUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById
}
