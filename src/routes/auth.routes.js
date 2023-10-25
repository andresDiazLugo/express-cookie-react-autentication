import { Router } from 'express'
import { register, login, logout,profile, verifyToken } from '../controllers/auth.controllers.js'
import { authRquired } from '../middlewares/validationToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerSchema,loginSchema } from '../schemas/auth.schema.js'
const router = Router()


router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.get('/logout', logout);
router.get("/profile", authRquired, profile);
router.get("/verify", verifyToken)

export default router