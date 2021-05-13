/*
 ** Description :
 */

import { FC } from 'react'

import Link from 'next/link'

import { GithubIcon } from '@components'

interface IPassingProps {
  projName: string
  ownerAcc: string
}

export const CardClickRow: FC<IPassingProps> = ({ projName, ownerAcc }) => (
  <div className="w-full h-10 sm:h-1/4 flex flex-row justify-between items-center px-1 sm:px-10 mx-6 sm:mx-1 ">
    <a href={`https://www.github.com/${ownerAcc}`} target="_blank">
      <GithubIcon />
    </a>
    <div className="px-6 py-2 md:border-2 cursor-pointer md:border-green-400 rounded-lg text-xl sm:text-2xl text-green-400 hover:text-white hover:bg-green-400">
      git clone
    </div>
    <Link href={`/${ownerAcc}/${projName}`}>
      <a className="px-6 py-2 text-center text-xl sm:text-2xl md:border-2 rounded-lg text-yellow-500 md:border-yellow-400 hover:text-white  hover:bg-yellow-400 ">
        more ...
      </a>
    </Link>
  </div>
)
