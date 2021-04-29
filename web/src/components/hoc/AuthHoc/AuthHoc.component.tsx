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
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_ROUTE}/api/v1/auth/register`,
        { email: 'fdsf@fdsfsd.com', password: 'sdfsdfsdfsdfs' }
      )
      console.log(res)
    } catch (error) {
      let sl = JSON.parse(JSON.stringify(error.response))
      console.log(sl.data[0])
      console.log(sl.status)
    }
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
