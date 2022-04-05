const UserModel = require('../models/UserModel');

const main = async function(nome, email, password, retypePassword) {
    const user_created = await UserModel.create({ nome, email, password });

    if(nome && email && password && retypePassword) {
        return user_created;
    } 
    
};

module.exports = main;