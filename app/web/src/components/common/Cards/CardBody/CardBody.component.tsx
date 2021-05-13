/*
 ** Description :
 */

import { FC } from 'react'

interface IPassingProps {
  body: string
}

export const CardBody: FC<IPassingProps> = ({ body }) => (
  <div className="w-full sm:h-2/4 leading-7 font-light text-xl px-1 sm:leading-snug xl:leading-relaxed ">
    {body}
  </div>
)
