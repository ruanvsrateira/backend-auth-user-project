const res = require("express/lib/response")

exports.SessionExist = function(req, res, next) {
    if(req.session.user) {
        return res.json({ logged: true });
    } else {
        return res.json({ logged: false, error: "Primeiro é necessário fazer o Login !" });
    }
}
