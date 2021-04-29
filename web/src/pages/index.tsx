import { Banner, CardItem, RedirectButton } from '@components'

export default function Home() {
  return (
    <main>
      <Banner dayq="Younited States Of Ready BoilerPlates!" />
      <CardItem>
        <div>
          <RedirectButton text="Login / Signup" href="/login" />
        </div>
      </CardItem>
    </main>
  )
}
