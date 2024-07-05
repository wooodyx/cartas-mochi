import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useUserStore } from '@/store/user'

const login = (email, password) => {
  const userStore = useUserStore()
  return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user

    localStorage.setItem('mochi-user', JSON.stringify(user))
    userStore.user = user

    return user
  })
}

const logout = () => {
  const userStore = useUserStore()
  localStorage.removeItem('mochi-user')
  userStore.user = null
}

export const Auth = {
  login,
  logout
}
