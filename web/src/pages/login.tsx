import { AuthForm, CardItem, AuthHoc, IChildrenAuthProps } from '@components'

export default function RegisterPage() {
  const renderLogin = (props: IChildrenAuthProps) => <AuthForm {...props} />

  return (
    <main>
      <CardItem>
        <AuthHoc route="login">{renderLogin}</AuthHoc>
      </CardItem>
    </main>
  )
}
