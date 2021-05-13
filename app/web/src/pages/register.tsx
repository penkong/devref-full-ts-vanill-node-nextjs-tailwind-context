/*
 ** Description :
 */

import { AuthForm, CardItem, AuthHoc, IChildrenAuthProps } from '@components'

export default function RegisterPage() {
  //

  const renderRegister = (props: IChildrenAuthProps) => (
    <AuthForm {...props} register />
  )

  return (
    <main>
      <CardItem>
        <AuthHoc route="register">{renderRegister}</AuthHoc>
      </CardItem>
    </main>
  )
}
