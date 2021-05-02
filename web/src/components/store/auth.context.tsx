import { FC, createContext, useState, useEffect, useContext } from 'react'

// initiation
export const AuthContext = createContext({})

// logic for provider in auth
const useAuthProvider = () => {
  const [current, setCurrent] = useState({
    status: '',
    user: {
      id: '',
      email: ''
    }
  })

  // we add logic here

  const register = () => {
    console.log('register')
  }
  const login = () => {
    console.log('login')
  }
  const logout = () => {
    console.log('logout')
  }
  const currentUser = () => {
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
