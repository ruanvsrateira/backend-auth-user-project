const UserModel = require('../models/UserModel');

const registerNewUserService = require('../services/registerNewUserService');
const getAllUsersService = require('../services/getAllUsersService');
const logInService = require('../services/logInService');

exports.registerNewUser = async function(req, res) {
    const {nome, email, password} = req.body;
    
    const user_created = await registerNewUserService(nome, email, password);

    return res.json({ user_created, success: "Usuário criado com sucesso!" });
};

exports.index = async function(req, res) {
    const results = await getAllUsersService();

    res.json(results);
};

exports.logging = async function(req, res) {
    const { email, password } = req.body;

    const user_logged = await logInService(email, password);

    res.json({ user_logged })
};
