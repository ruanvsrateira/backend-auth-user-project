const UserModel = require('../models/UserModel');

const registerNewUserService = require('../services/registerNewUserService');
const getAllUsersService = require('../services/getAllUsersService');
const formValidatorService = require('../services/formValidatorService');

exports.registerNewUser = async function(req, res) {
    const { nome, email, password, retypePassword } = req.body;

    const user = await UserModel.findOne({ email })

    if(!nome || !email || !password || !retypePassword) {
        return res.json({ error: "Todos os campos precisam ser preenchidos" });
    } else if(user) {
        return res.json({ error: "Já existe um Usuário cadastrado com este e-mail !" });
    } else if(password !== retypePassword) {
        return res.json({ error: "As senhas não se coincidem !" });
    } else {
        const user_created = await UserModel.create({
            nome, email, password
        });

        return res.json({ success: "Usuario criado com sucesso !"})
    }
        
};

exports.index = async function(req, res) {
    const results = await getAllUsersService();

    res.json(results);
}