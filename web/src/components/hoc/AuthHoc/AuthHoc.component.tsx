/*
 ** Description :
 */

import React, { ChangeEvent, useState, FormEvent } from 'react'

import { useAuth, IAuthHOCProps, IAuthProps, AuthContext } from '@components'
import { useContext } from 'react'

// ---

export const AuthHoc: React.FC<IAuthHOCProps> = ({ children, route }) => {
  //
  const { login } = useAuth()
  const [formState, setFormState] = useState<IAuthProps>()

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState!,
      [name]: value
    })
  }

  const onAuthSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login({ email: 'fsdfdsfsd@fdsfdsf', password: 'sdfsdfsdfsfs' })
    // await sl.login('fdsfsdf@gsdfdsfsd.com', 'dfdsfsddsfdfsdf')
  }

  return children({
    onChangeInput,
    onAuthSubmit
  })
}
// if (!formState) return

// if (formState.confirmPassword != formState.password) return

// route === 'register' ? console.log('register') : console.log('login')
// dispatch(AuthRegisterStartAction(formState))
// dispatch(AuthLogInStartAction(formState))
