const config = require('config');
const con = require('../database');
const { emailValidator } = require('../helper');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


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
            const salt = await bcrypt.genSalt(10)
            const passHash = await bcrypt.hash(userRequest.Password, salt);
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
            const token = jwt.sign({dbUser},'jwtPrivateKey', { expiresIn: '1h'});  //config.get('jwtPrivateKey')
            res.header('x-auth-token',token).status(200).json("Welcome  " + dbUser.Email);        }
        else {
            res.status(401).send("Wrong password");
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
};


deleteUserQuery = (userId) => {
    const query = "DELETE FROM users WHERE Users_id = ?";
    return new Promise((resolve,reject) => {
        con.query(query,[userId],(error,results,fields) => {
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

deleteUser = async(req,res) => {
    const userId = req.params.Users_id;

    try {
        await deleteUserQuery(userId);
        res.status(200).send(`User with id ${userId} has been DELETED`);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports = {
    getAllUsers,
    loginUser,
    createUser,
    deleteUser
};