// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getConfig from 'next/config'

import { NextApiRequest, NextApiResponse } from 'next'

// ---

const { serverRuntimeConfig } = getConfig()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //

  if (req.method === 'POST') {
    //

    if (req.cookies.vanillajwt)
      return res.json([{ message: 'Nextjs Says You Alreaedy Logged In!' }])

    if (!req.body || !req.body.email || !req.body.password)
      return res.json([{ message: 'Need Info For Action' }])

    const { email, password } = req.body

    try {
      //

      const info = await fetch(
        `${serverRuntimeConfig.apiRoute}/api/v1/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify({
            email,
            password
          })
        }
      )

      res.setHeader('Set-cookie', info.headers.get('set-cookie')!)
      return res.json(await info.json())
    } catch (error) {
      console.log('Nextjs Server Error: ', error)
      return res.json(error)
    }
  }
}
