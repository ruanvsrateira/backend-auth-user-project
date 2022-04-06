const UserModel = require('../models/UserModel');

const main = async function(email, password) {
    const user_logged = await UserModel.findOne({ email: email, password: password })

    return user_logged;
}

module.exports = main;