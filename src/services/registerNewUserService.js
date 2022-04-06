const UserModel = require('../models/UserModel');

const main = async function(nome, email, password) {
    const user_created = await UserModel.create({ nome, email, password });

    return user_created;
};

module.exports = main;