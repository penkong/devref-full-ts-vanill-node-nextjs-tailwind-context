/*
 ** Description :
      Document is only rendered in the server, event handlers like onClick won't work.
 */

import { FC } from 'react'
import { Header } from '../'

export const PageProvider: FC = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      {children}
    </div>
  )
}

const styles = {
  main: ` 
  w-11/12 
  sm:w-10/12 
  md:w-9/12 
  xl:w-8/12 
  mx-auto 
  min-h-screen 
  h-auto`
}
