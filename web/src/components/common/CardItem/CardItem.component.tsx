import { FC } from 'react'

import { CardClickRow, CardBody, StarIcon } from '@components'

interface IPassingProps {
  projName: string
  ownerAcc: string
  body: string
}

export const CardItem: FC<IPassingProps> = ({ projName, ownerAcc, body }) => (
  <article className="w-full mx-auto  mt-5 sm:mt-2 sm:px-5 sm:py-3">
    <div className="w-full h-90 sm:h-80 lg:h-96 flex flex-col justify-start items-start sm:flex-row  sm:justify-between sm:p-2 sm:px-2 border-gray-500 border-2 rounded-lg shadow-lg antialiased">
      <div className="w-full sm:w-3/12 lg:w-2/6 xl:w-1/4 h-32 sm:h-full flex flex-row justify-start sm:justify-center items-center">
        <div className="w-52 sm:w-full h-full sm:h-3/6 md:h-full lg: p-2 ml-3 rounded-sm shadow-sm antialiased" />
        <div className="sm:hidden w-full h-full ml-3 pr-5 mt-4 flex flex-col relative ">
          <div className="">{projName}</div>
          <div className="ml-auto absolute right-5 bottom-10">
            <StarIcon />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-9/12 lg:w-4/6 xl:w-10/12 h-48 sm:h-full sm:ml-3 px-2 py-1 flex flex-row flex-wrap">
        <div className="hidden w-full sm:px-1 sm:h-1/4 sm:flex sm:flex-row justify-between items-center ">
          <div>name of project on sm to up</div>
          <div className="mr-5">
            <StarIcon />
          </div>
        </div>
        <CardBody body={body} />
        <CardClickRow projName={projName} ownerAcc={ownerAcc} />
      </div>
    </div>
  </article>
)
