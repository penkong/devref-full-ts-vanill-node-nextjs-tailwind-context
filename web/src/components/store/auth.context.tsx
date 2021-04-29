import { FC, createContext, useState, useEffect } from 'react'

const ctx = {
  user: {
    id: '',
    email: '',
    token: ''
  },
  register: () => {},
  login: () => {},
  logout: () => {}
}

export const AuthContext = createContext(ctx)

export const AuthCtxProvider: FC = ({ children }) => {
  // we add logic here
  const [user, setUser] = useState<typeof ctx.user>(ctx.user)

  const currentUser = async () => {}

  useEffect(() => {
    currentUser()
  }, [])

  const passingCtx = { ...ctx, user }

  return (
    <AuthContext.Provider value={passingCtx}>{children}</AuthContext.Provider>
  )
}
