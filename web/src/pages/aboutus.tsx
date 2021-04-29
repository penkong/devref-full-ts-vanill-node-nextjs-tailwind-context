/*
 ** Description :
 */

import { PersonCard } from '@components'

export default function AboutUs() {
  return (
    <article className="w-full mx-auto mt-5 sm:mt-2 sm:px-5 sm:py-3">
      <div
        className="w-full flex flex-row flex-wrap sm:p-12 sm:px-12 
        border-gray-500 border-2 rounded-lg 
        shadow-lg antialiased"
        style={{
          minHeight: 'calc(100vh - 13.5rem)',
          maxHeight: 'auto'
        }}
      >
        <PersonCard
          imgSrc="/static/img/mkz.jpg"
          linkedin="https://www.linkedin.com/in/mazdak-nazemi-5a7950142/"
          name="Mazdak Nazemi"
          contributer={false}
          ability="Full Stack"
          email=""
          web="http://www.penbeh.com"
          github="penkong"
        />
        <PersonCard
          linkedin="https://www.linkedin.com/"
          name="Your Name Here!"
          ability="Value Producer"
        />
      </div>
    </article>
  )
}
