/*
 ** Description :
 */

import { FC } from 'react'

// ---

export const AuthView: FC = ({ children }) => (
  <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      {children}
    </div>
  </div>
)
