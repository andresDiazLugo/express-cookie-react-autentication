import { Router } from 'express';
import { authRquired } from '../middlewares/validationToken.js';
import { getTask,getTasks,createTasks,updateTask,deleteTask } from '../controllers/task.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createTaskSchema } from '../schemas/task.schema.js'
const router = Router()

router.get('/tasks', authRquired, getTasks)
router.get('/tasks/:id', authRquired, getTask)
router.post('/tasks', authRquired, validateSchema(createTaskSchema), createTasks)
router.delete('/tasks/:id', authRquired, deleteTask)
router.put('/tasks/:id', authRquired, updateTask)

export default router;