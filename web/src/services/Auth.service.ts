export class AuthService {
  static async register(email: string, password: string) {
    const resp = await fetch('/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })
    return await resp.json()
  }

  static async login(email: string, password: string) {
    try {
      const resp = await fetch('/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password
        })
      })

      if (!resp.ok)
        // or check for response.status
        throw new Error()
      return await resp.json()
    } catch (error) {
      console.log(error)
      console.log(JSON.parse(JSON.stringify(error)))
    }
  }

  static async logout() {
    const resp = await fetch('/api/v1/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    return await resp.json()
  }

  static async currentUser() {
    const resp = await fetch('/api/v1/currentUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })

    return await resp.json()
  }
}
