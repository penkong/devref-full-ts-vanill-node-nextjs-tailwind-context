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
    console.log(process.env.NEXT_PUBLIC_ROUTE)
    // try {
    // const res = await axios.post(
    //   '/api/login',
    //   { email: 'fdsf@fdsfsd.com', password: 'sdfsdfsdfsdfs' },
    //   { withCredentials: true }
    // )

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
    // } catch (error) {
    //   console.log(error)
    // }
    // try {
    //   const res = await axios.post(
    //     `${process.env.NEXT_PUBLIC_ROUTE}/api/v1/auth/login`,
    //     { email: 'fdsf@fdsfsd.com', password: 'sdfsdfsdfsdfs' },
    //     { withCredentials: true }
    //   )
    //   console.log(res.data)
    //   console.log(document.cookie)
    // } catch (error) {
    //   let sl = JSON.parse(JSON.stringify(error.response))
    //   console.log(sl.data[0])
    //   console.log(sl.status)
    // }
    return
    // if (!formState) return

    // if (formState.confirmPassword != formState.password) return

    // route === 'register' ? console.log('register') : console.log('login')
    // dispatch(AuthRegisterStartAction(formState))
    // dispatch(AuthLogInStartAction(formState))
  }

  return children({
    onChangeInput,
    onAuthSubmit
  })
}
