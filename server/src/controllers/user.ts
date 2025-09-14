import type { Request, Response } from "express"

const insetUser = () => {

}

const getUser = (req: Request, res: Response) => {
  return res.json("OK");
}


export default { insetUser, getUser }
