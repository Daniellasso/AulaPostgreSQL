import { Router } from "express";
import { createUsers, getAllUsers, deleteUser } from "./controllers/UsersController.js";

const routes = Router()

routes.get('/users', getAllUsers)
routes.post('/cadastro', createUsers)
routes.delete('/delete/:id', deleteUser)


export default routes