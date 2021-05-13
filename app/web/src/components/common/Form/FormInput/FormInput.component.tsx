/*
 ** Description :
 */

import { FC, ChangeEvent } from 'react'

// ---

interface IPassingProps {
  label: string
  name: string
  value?: string
  placeHolder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type: string
}

// ---

export const FormInput: FC<IPassingProps> = ({
  label,
  name,
  value,
  placeHolder,
  onChange,
  type
}) => {
  return (
    <>
      <label className="font-semibold text-xl text-gray-600 pb-3 block">
        {label.trim()}
      </label>
      <input
        value={value}
        name={name.trim()}
        id={name}
        aria-describedby={`${label}Help`}
        placeholder={placeHolder}
        onChange={onChange}
        type={type}
        min={type == 'password' ? 4 : ''}
        max={type == 'password' ? 20 : ''}
        className="border rounded-lg px-4 py-3 mt-2 mb-5 text-xl w-full"
      />
    </>
  )
}
