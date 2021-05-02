import { FC, createContext, useState, useContext } from 'react'

import { AuthService } from '@services'
import { IAuthProps } from '@components/hoc'

// initiation
export const AuthContext = createContext({})

// logic for provider in auth
const useAuthProvider = () => {
  const [current, setCurrent] = useState({
    status: '',
    user: {
      id: '',
      email: ''
    },
    error: ''
  })

  // we add logic here

  const register = async ({ email, password }: IAuthProps) => {
    console.log('register')
  }

  const login = async ({ email, password }: IAuthProps) => {
    console.log('login')

    try {
      const data = await AuthService.loginClient(email, password)

      setCurrent(data)
    } catch (error) {
      setCurrent(error)
    }
  }

  const logout = async () => {
    console.log('logout')
  }
  const currentUser = async () => {
    console.log('currentUser')
  }

  return { current, register, login, logout, currentUser }
}

// for root of project to wrap with .
export const AuthProvider: FC = ({ children }) => (
  <AuthContext.Provider value={useAuthProvider()}>
    {children}
  </AuthContext.Provider>
)

// for in component consumption
export const useAuth = () => useContext(AuthContext)
