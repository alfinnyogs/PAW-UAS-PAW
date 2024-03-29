import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/users', createUser);
router.patch('/user/:uuid', updateUser);
router.delete('/user/:id', deleteUser);

export default router;