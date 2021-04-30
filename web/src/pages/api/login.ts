// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

// import Cors from 'cors'

// // Initializing the cors middleware
// const cors = Cors({
//   methods: ['GET', 'HEAD', 'OPTIONS']
// })

import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // res.json(serverRuntimeConfig.apiRoute)

    fetch(`${serverRuntimeConfig.apiRoute}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: 'fdsf@fdsfsd.com',
        password: 'sdfsdfsdfsdfs'
      })
    })
      .then(response => response.json())
      .then(data => {
        res.json(data)
      })
      .catch(error => {
        console.error('Next Server Error:', error)
      })
  }
}
