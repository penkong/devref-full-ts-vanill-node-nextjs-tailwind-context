export class AuthService {
  static async registerClient() {}
  static async loginClient(email: string, password:) {
    try {
      const resp = await fetch('/api/login', {
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
    } catch (error) {
      console.log('From AuthService Login Client', error)
    }
  }
  static async logoutClient() {}
  static async currentUserClient() {}

  static async registerNextApi() {}
  static async loginNextApi() {}
  static async logoutNextApi() {}
  static async currentUserNextApi() {}
}
