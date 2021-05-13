/*
 ** Description :
 */

import { AuthForm, CardItem, AuthHoc, IChildrenAuthProps } from '@components'
import { useCookies } from 'react-cookie'

export default function RegisterPage() {
  const renderLogin = (props: IChildrenAuthProps) => <AuthForm {...props} />

  const [cookie, setCookie] = useCookies(['vanillajwt'])

  return (
    <main>
      <CardItem>
        <AuthHoc route="login">{renderLogin}</AuthHoc>
      </CardItem>
    </main>
  )
}
