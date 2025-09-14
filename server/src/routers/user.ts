import express from 'express'
import { User } from '../models/index.ts'
import userController from '../controllers/user.ts'
const router = express.Router()

router.post('/insetUser', userController.insetUser)
router.get('/getUsers', userController.getUser)

export default router
