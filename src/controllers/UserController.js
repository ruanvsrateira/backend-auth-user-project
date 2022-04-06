const UserModel = require('../models/UserModel');

const registerNewUserService = require('../services/registerNewUserService');
const getAllUsersService = require('../services/getAllUsersService');
const formValidatorService = require('../services/formValidatorService');

exports.registerNewUser = async function(req, res) {
    const {nome, email, password} = req.body;
    
    const user_created = await registerNewUserService(nome, email, password);

    return res.json({ user_created });
};

exports.index = async function(req, res) {
    const results = await getAllUsersService();

    res.json(results);
}