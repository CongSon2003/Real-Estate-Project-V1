import type { Request, Response } from 'express'
import userRouter from './user.ts'
const initRouters = (app: any) => {
  app.use('/api/user/', userRouter)

  return app.use('/', (req: Request, res: Response) => {
    res.send('Server Go On...')
  })
}

export default initRouters
