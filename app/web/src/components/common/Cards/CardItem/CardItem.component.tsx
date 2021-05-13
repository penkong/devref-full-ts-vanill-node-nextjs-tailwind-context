/*
 ** Description :
 */

import { FC } from 'react'

interface IPassingProps {}

export const CardItem: FC<IPassingProps> = ({ children }) => (
  <article className="w-full mx-auto  mt-5 sm:mt-2 sm:px-5 sm:py-3">
    <div
      style={{ minHeight: '450px' }}
      className="w-full h-90 sm:h-80  flex bg-green-50 flex-col justify-center items-center sm:flex-row  sm:justify-between sm:p-2 sm:px-2 border-gray-500 border-2 rounded-lg shadow-lg antialiased"
    >
      <div className="w-full sm:w-9/12 lg:w-4/6 xl:w-10/12 h-48 sm:h-full mx-auto px-2 py-1 flex flex-col flex-wrap justify-center items-center">
        <div className="w-full sm:px-1 sm:h-1/4 sm:flex sm:flex-row justify-center items-center mx-auto">
          <div className="mx-auto">{children}</div>
        </div>
      </div>
    </div>
  </article>
)
