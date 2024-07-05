import { Auth } from '@/services/auth/auth'

export default function useAuth() {
  const login = async (email, pass) => {
    await Auth.login(email, pass)
  }

  const logout = async () => {
    await Auth.logout()
  }

  return {
    login,
    logout
  }
}
