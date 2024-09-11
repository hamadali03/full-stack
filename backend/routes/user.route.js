import express from 'express'
import { sign,getUsers } from '../controllers/user.controller.js';
const userRoute = express.Router()

userRoute.post('/sign',sign)
userRoute.get('/users',getUsers)

export default userRoute;