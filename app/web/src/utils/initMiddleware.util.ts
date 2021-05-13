export default function initMiddleware(middleware: any) {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware((_req: any, _res: any, result: any) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}
