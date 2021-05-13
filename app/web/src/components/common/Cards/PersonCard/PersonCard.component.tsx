/*
 ** Description :
 */

import Image from 'next/image'
import { FC } from 'react'

import { GithubIcon, EmailIcon, GlobeIcon } from '@components'

interface IPassingProps {
  imgSrc?: string
  linkedin?: string
  name?: string
  contributer?: boolean
  ability?: string
  email?: string
  web?: string
  github?: string
}

export const PersonCard: FC<IPassingProps> = ({
  imgSrc = '',
  linkedin = '',
  name = 'Your name',
  contributer = true,
  ability = 'Developer',
  email,
  web,
  github
}) => (
  <div className="w-full sm:w-2/4 flex flex-col justify-center items-center mt-7">
    <p className="text-gray-600">{contributer ? 'contributer' : 'admin'}</p>
    {imgSrc.length > 0 ? (
      <a href={linkedin} target="_blank" className="cursor-pointer">
        <Image
          src={imgSrc}
          alt=" random imgee"
          width="240"
          height="240"
          className="w-80 h-80 hover:filter-none filter contrast-200 brightness-100 grayscale object-cover object-center rounded-full shadow-md"
        />
      </a>
    ) : (
      <div className="w-80 h-80 bg-gray-100 object-cover object-center rounded-full shadow-md"></div>
    )}

    <div className="relative px-4 -mt-16 w-96 flex flex-col justify-between items-center ">
      <div className="border-indigo-100 border bg-white p-6 w-96 flex flex-col justify-between items-center  rounded-xl shadow-sm text-xl">
        <p>{name}</p>
        <p className="mt-2">{ability}</p>
        <div className="w-5/6 flex flex-row justify-between items-center mt-3">
          <a href={`https://www.github.com/${github || ''}`} target="_blank">
            <GithubIcon hBig="12" wBig="12" />
          </a>
          <span className="cursor-pointer ">
            <a
              href={`mailto:${email}?subject=${
                encodeURIComponent('From DevRef Viewer') || ''
              }&body=${''}`}
            >
              <EmailIcon />
            </a>
          </span>
          <a href={web} target="_blank">
            <GlobeIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
)
