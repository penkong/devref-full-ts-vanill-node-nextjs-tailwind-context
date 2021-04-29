/*
 ** Description :
 */

import Link from 'next/link'

import { FC } from 'react'

// ---

interface IPassingProps {
  href: string
  text: string
}

// ---

export const RedirectButton: FC<IPassingProps> = ({ href, text }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center sm:text-left whitespace-nowrap">
        <Link href={href ? `${href}` : '/'}>
          <span className="transition mt-3 mb-9 duration-200 px-4 py-3 cursor-pointer font-normal text-lg rounded-lg text-white bg-green-400 hover:bg-gray-800 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 inline-block align-text-top"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
            <span className="inline-block ml-4">{text}</span>
          </span>
        </Link>
      </div>
    </>
  )
}
