const UserModel = require('../models/UserModel');

const main = async function() {
  
    const results = await UserModel.find({});

    return results;

};

module.exports = main;