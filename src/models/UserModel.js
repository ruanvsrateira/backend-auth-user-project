const { model, Schema } = require('mongoose');

const UserModelSchema = new Schema({
    nome: {
        type: String,
    },

    email: {
        type: String,
    },

    password: {
        type: String,
    }
});

const UserModel = model("users", UserModelSchema);

module.exports = UserModel;