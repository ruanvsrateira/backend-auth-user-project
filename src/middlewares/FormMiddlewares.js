const UserModel = require('../models/UserModel');

exports.registrationFormMiddleware = async function(req, res, next) {
    const { nome, email, password, retypePassword } = req.body;

    const user = await UserModel.findOne({ email })

    if(!nome || !email || !password || !retypePassword) {
        return res.json({ error: "Todos os campos precisam ser preenchidos" });
    } else if(user) {
        return res.json({ error: "Já existe um Usuário cadastrado com este e-mail !" });
    } else if(password !== retypePassword) {
        return res.json({ error: "As senhas não se coincidem !" });
    } else {
        next();
    }
}