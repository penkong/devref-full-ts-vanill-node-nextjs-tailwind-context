// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from 'axios'
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
        `${serverRuntimeConfig.apiRoute}/api/v1/auth/login`,
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
      const data = await info.json()
      return res.json(data)
    } catch (error) {
      console.log('Nextjs Server Error: ', error)
    }
  }
}
