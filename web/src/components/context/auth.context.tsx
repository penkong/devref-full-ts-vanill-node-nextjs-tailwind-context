import router from 'next/router'

import { FC, createContext, useState, useContext } from 'react'

import { AuthService } from '@services'
import { IAuthProps } from '@components/hoc'

// ---

export interface IAuthCtx {
  current: {
    status: string
    user: {
      id: string
      pic: string
      email: string
      role: string
    }
    error: string
  }

  register: (info: IAuthProps) => void
  login: (info: IAuthProps) => void
  logout: () => void
  currentUser: () => void
}

// initiation
export const AuthContext = createContext<IAuthCtx>({
  current: {
    status: '',
    user: {
      id: '',
      pic: '',
      email: '',
      role: ''
    },
    error: ''
  },
  register(info: IAuthProps) {},
  login(info: IAuthProps) {},
  logout() {},
  currentUser() {}
})

// logic for provider in auth
const useAuthProvider = () => {
  const [current, setCurrent] = useState({
    status: '',
    user: {
      id: '',
      pic: '',
      email: '',
      role: ''
    },
    error: ''
  })

  // we add logic here

  const register = async ({ email, password }: IAuthProps) => {
    console.log('register')

    try {
      const { id, pic, email: resEmail, role } = await AuthService.register(
        email,
        password
      )

      setCurrent({
        status: 'SIGNED_IN',
        user: {
          id,
          email: resEmail,
          pic: pic || '',
          role: role || 'SIMPLE_USER'
        },
        error: ''
      })
      console.log(current)
      router.push('/landing')
    } catch (error) {
      console.log('From Auth Context Register', error)
      console.log(error.message)
      setCurrent({
        status: 'ERROR',
        user: { id: '', email: '', pic: '', role: '' },
        error: error.message
      })

      router.push('/register')
    }
  }

  const login = async ({ email, password }: IAuthProps) => {
    console.log('login')

    try {
      const data = await AuthService.login(email, password)
      // if (data[0].status == 400) {
      //   console.log('it touch here')
      //   setCurrent(() => ({
      //     ...current,
      //     status: 'ERROR',
      //     user: {
      //       id: '',
      //       email: '',
      //       pic: '',
      //       role: ''
      //     },
      //     error: data[0].message
      //   }))
      // } else {
      setCurrent({
        status: 'SIGNED_IN',
        user: {
          id: data[0].id,
          email: data[0].email,
          pic: data[0].pic || '',
          role: data[0].role || 'SIMPLE_USER'
        },
        error: ''
      })
      // router.push('/landing')
      // }
    } catch (error) {
      console.log(JSON.stringify(JSON.parse(error)))
      console.log('From Auth Context Login', error)
    }
  }

  const logout = async () => {
    console.log('logout')
    try {
      await AuthService.logout()
      setCurrent({
        status: 'SIGNED_OUT',
        user: {
          id: '',
          email: '',
          pic: '',
          role: ''
        },
        error: ''
      })
      router.push('/logout')
    } catch (error) {
      console.log('From Auth Context Logout', error)
      setCurrent({ ...current, error: error.message })
    }
  }

  const currentUser = async () => {
    console.log('currentUser')
    try {
      const resp = await AuthService.currentUser()
      console.log(resp)
      // setCurrent({})
    } catch (error) {
      console.log('From Auth Context CurrentUser ', error)
      setCurrent({ ...current, error: error.message })
    }
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
