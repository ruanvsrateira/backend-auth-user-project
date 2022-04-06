const UserModel = require('../models/UserModel');

const main = async function(email, password, req) {
    const user_logged = await UserModel.findOne({ email: email, password: password })

    req.session.user = user_logged;

    return user_logged;
}

module.exports = main;