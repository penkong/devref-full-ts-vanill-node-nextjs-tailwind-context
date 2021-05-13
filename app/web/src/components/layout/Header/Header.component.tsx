/*
 ** Description :
      Document is only rendered in the server, event handlers like onClick won't work.
 */

import React from 'react'
import Link from 'next/link'

export const Header = () => (
  <nav>
    <div className="w-full h-40 mx-auto flex flex-row flex-wrap justify-evenly items-center space-x-4 md:space-x-8">
      <Link href="/">
        <a className="min-w-3/12 w-3/12 sm:w-2/12 h-full flex flex-row justify-center items-center sm:-mt-1 cursor-pointer font-semibold sm:text-4xl md:text-5xl xl:text-7xl px-1 py-2 hover:text-indigo-800">
          DFullTsVNodeNexTail
        </a>
      </Link>
      <div className="min-w-4/12 w-6/12 sm:w-3/12 h-3/5 flex flex-row justify-around items-center">
        <Link href="/aboutus">
          <a className="hover:text-indigo-300 cursor-pointer">About us</a>
        </Link>
        <div>lang</div>
      </div>
    </div>
  </nav>
)
