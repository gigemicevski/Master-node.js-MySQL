const con = require('../database');
const { emailValidator } = require('../helper');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// const config = require('config');


getAllUsersQuery = () => {
    const query = "SELECT * FROM users;";
    return new Promise((resolve, reject) => {
        con.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
          });
    });
};

getAllUsers = async(req, res) => {
    try {
        const users = await getAllUsersQuery();
        res.status(200).send(users);  
    } catch (error) {
        res.status(500).send(error);
    }
};

createUserQuery = (user,password) => {
    const query = 'INSERT INTO users (Email,Password) VALUES (?,?)';
    return new Promise((resolve, reject) => {
        con.query(query,[user.Email,password], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
            });
    });
};
createUser = async(req, res, next) => {
    let isValid = emailValidator(req.body.Email);
    if (!isValid) {
        var error = new Error("Email is not valid!");
        error.status = 401;
        next(error);
    }
    else {
        try {
            const userRequest = req.body;
            const passHash = await bcrypt.hash(userRequest.Password, 10);
            await createUserQuery(userRequest, passHash);
            res.status(201).send("User has been created!");
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
};


getUserByEmailQuery = (email) => {
    const query = "SELECT * FROM users WHERE Email = ?";
    return new Promise((resolve, reject) => {
        con.query(query, [email], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });
};

loginUser = async(req, res) => {
    const email = req.body.Email;
    const pass = req.body.Password;

    try {
        var user = await getUserByEmailQuery(email);
        var dbUser = user[0];
        const matchPass = bcrypt.compareSync(pass, dbUser.Password);
        if (matchPass) {
            const token = jwt.sign({dbUser},'jwtPrivateKey', { expiresIn: '1h'});
            res.header(token).status(200).json(token);        }
        else {
            res.status(401).send("Wrong password");
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
};


module.exports = {
    getAllUsers,
    loginUser,
    createUser
};