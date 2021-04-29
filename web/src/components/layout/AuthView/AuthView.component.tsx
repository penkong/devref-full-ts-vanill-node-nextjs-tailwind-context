/*
 ** Description :
 */

import { FC } from 'react'

// ---

export const AuthView: FC = ({ children }) => (
  <div className="xs:p-0 mx-auto md:w-full md:max-w-md">
    <div
      style={{ minHeight: '350px' }}
      className="bg-white  shadow w-full rounded-lg divide-y divide-gray-100"
    >
      {children}
    </div>
  </div>
)
