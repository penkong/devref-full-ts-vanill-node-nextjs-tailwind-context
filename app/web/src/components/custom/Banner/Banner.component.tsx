/*
 ** Description :
 */

import { FC } from 'react'

interface IPassingProps {
  dayq: string
}

export const Banner: FC<IPassingProps> = ({ dayq }) => (
  <div className="w-full mx-auto h-28 sm:h-14 sm:mt-2 sm:px-5 sm:py-3 mb-16 sm:mb-36">
    <div
      className="w-full h-40 sm:h-40 lg:h-43 flex flex-col justify-center 
    items-center sm:flex-row  sm:justify-center sm:text-4xl sm:p-2 sm:px-2 border-gray-500 border-2 rounded-lg shadow-lg antialiased"
    >
      <p
        className="text-xl md:text-4xl lg:text-5xl tracking-tighter  md:tracking-wider"
        style={{ wordSpacing: '5px' }}
      >
        {dayq}
      </p>
    </div>
  </div>
)
