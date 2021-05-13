/*
 ** Description :
 */

import React, { ChangeEvent, FC, FormEvent } from 'react'

import { AuthView, FormButton, FormInput, RedirectButton } from '@components'

// ---

interface IPassingProps {
  register?: boolean
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  onAuthSubmit: (e: FormEvent<HTMLFormElement>) => void
}

// ---

const s = {
  register: 'register',
  back: 'Go Back Login Page',
  goRegister: "Haven't Account ? Register"
}

export const AuthForm: FC<IPassingProps> = ({
  register,
  onAuthSubmit,
  onChangeInput
}) => {
  return (
    <AuthView>
      <form onSubmit={onAuthSubmit} className="px-5 py-7">
        <FormInput
          type="email"
          label="E-mail"
          name="email"
          onChange={onChangeInput}
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          onChange={onChangeInput}
        />
        {register && (
          <FormInput
            type="password"
            label="Confirim Password"
            name="confirmPassword"
            onChange={onChangeInput}
          />
        )}
        <FormButton text="Login" />
      </form>
      <div className="mt-5">
        <RedirectButton
          href={register ? 'login' : s.register}
          text={register ? s.back : s.goRegister}
        />
      </div>
    </AuthView>
  )
}
