import { User } from '@/services/user/user'

export default function useUser() {
  const createUser = async (name, email, role) => {
    await User.createUser({ name, email, role })
  }

  return {
    createUser
  }
}
