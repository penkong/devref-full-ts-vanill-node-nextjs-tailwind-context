/*
 ** Description :
 */

export default function Dashboard() {
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
        I AM Dashboard IF YOU Authenticatd can see this .
      </div>
    </article>
  )
}
