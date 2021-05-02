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
    return await resp.json()
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
