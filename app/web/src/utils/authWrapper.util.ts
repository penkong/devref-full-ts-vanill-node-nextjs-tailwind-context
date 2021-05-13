import { NextPageContext } from 'next'
import { FC } from 'react'

// use it for server side loading user authChecker
export const authCheckWrapper = (comp: FC) => async (ctx: NextPageContext) => {
  const current = await currentUser(ctx.req)

  if (current) {
    ctx.res?.writeHead(307, { Location: '/login' })
    ctx.res?.end()
    return { props: {} }
  }

  return comp ? comp(ctx, auth) : { props: { current } }
}

// usage
// export const getServSideProps = authCheckWrapper
