import { FC } from 'react'

interface IPassingProps {}

export const CardItem: FC<IPassingProps> = ({ children }) => (
  <article className="w-full mx-auto  mt-5 sm:mt-2 sm:px-5 sm:py-3">
    <div className="w-full h-90 sm:h-80 lg:h-auto flex bg-red-400 flex-col justify-start items-start sm:flex-row  sm:justify-between sm:p-2 sm:px-2 border-gray-500 border-2 rounded-lg shadow-lg antialiased">
      <div className="w-full sm:w-9/12 lg:w-4/6 xl:w-10/12 h-48 sm:h-full sm:ml-3 px-2 py-1 flex flex-row flex-wrap">
        <div className="hidden w-full sm:px-1 sm:h-1/4 sm:flex sm:flex-row justify-between items-center ">
          <div className="mr-5">{children}</div>
        </div>
      </div>
    </div>
  </article>
)
