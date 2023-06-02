const users = require('../Utils/users');
const login = (req, res) => {
    const { email, password } = req.body;
    const userFound  = users.find((user) => user.email === email && user.password === password);

    if(userFound) { 
        return res.status(200).json({access: true});
    }
    return res.status(404).json({access: false});
}
                        
module.exports = {
    login
};