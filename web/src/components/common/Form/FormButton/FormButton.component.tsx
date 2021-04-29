/*
 ** Description :
 */

import { FC } from 'react'

// ---

interface IPassingProps {
  text: string
}

// ---

export const FormButton: FC<IPassingProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
    >
      <span className="inline-block mr-2">{text.trim()}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-4 h-4 inline-block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  )
}
