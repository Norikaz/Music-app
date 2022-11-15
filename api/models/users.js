const bcrypt = require('bcryptjs/dist/bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model { }

    User.init({
       firstName: {type: DataTypes.STRING},
       lastName:  {type: DataTypes.STRING},
       email: {
        type: DataTypes.STRING,
        unique: true, // not allow user to use an existing email 
        allowNull: false, // will not allow value to be empty
        validate: {
            isEmail:true,  // will check for valid email format
        }
    }, 
    passwordHash: {type: DataTypes.STRING}, // saves the hash for the password the user signed up with
    password: {
        type: DataTypes.VIRTUAL,   // virtual datatype only exists temp 
        validate: {
            isLongEnough:(val) => {         //function to force password to be at least 10 characters 
                if(val.length < 10) {
                    throw new Error('Password must be 10 or more characters');
                }
            },
        },
    },
    }, {
        sequelize,
        modelName: 'user'
    })

    


    return User; 
}