import User from '../models/User.js'
import crypto from 'node:crypto'

const createUsers = async (req, res) => {
    const { name, age, email } = req.body;

    try {
        const userToCreate = {
            id: crypto.randomUUID(),
            name: name,
            age: age,
            email: email
        }

        const user = await User.create(userToCreate)

        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }

}

const getAllUsers = async (req, res) => {

    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (err) {
        console.log("Error: ", err);
        console.error(err);
    }


}

const deleteUser = async (req, res) => {

    try {
        const users = await User.destroy({
            where: { id: req.params.id }
        })

        if (users === 0) {
            return res.status(404).json({
                message: "Usuário não encontrado."
            });
        }

        return res.status(200).json({
            message: "Usuário deletado com sucesso."
        });

    } catch (err) {
        console.log("Error: ", err);
        console.error(err);
    }

}


export { getAllUsers, createUsers, deleteUser }