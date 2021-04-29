/*
 ** Description :
 */

import getConfig from 'next/config'

import React, { ChangeEvent, useState, FormEvent } from 'react'

import { IAuthHOCProps, IAuthProps } from './AuthHoc.interface'

// ---

// const {
//   publicRuntimeConfig: { apiRoute }
// } = getConfig()

// ---

export const AuthHoc: React.FC<IAuthHOCProps> = ({ children, route }) => {
  //

  const [formState, setFormState] = useState<IAuthProps | null>(null)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState!,
      [name]: value
    })
  }

  const onAuthSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // if (formState.confirmPassword != formState.password) return

    // route === 'register'
    // ? dispatch(AuthRegisterStartAction(formState))
    // : dispatch(AuthLogInStartAction(formState))
  }

  return children({
    onChangeInput,
    onAuthSubmit
  })
}
