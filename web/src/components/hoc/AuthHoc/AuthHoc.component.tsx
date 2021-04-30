/*
 ** Description :
 */

import getConfig from 'next/config'

import axios from 'axios'

import React, { ChangeEvent, useState, FormEvent } from 'react'

import { IAuthHOCProps, IAuthProps } from './AuthHoc.interface'

// ---

// const {
//   publicRuntimeConfig: { apiRoute }
// } = getConfig()

// ---

export const AuthHoc: React.FC<IAuthHOCProps> = ({ children, route }) => {
  //

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

    fetch('/api/login', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: 'fdsf@fdsfsd.com',
        password: 'sdfsdfsdfsdfs'
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data)
      })

      .catch(error => {
        console.error('Error:', error)
      })

    return
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
