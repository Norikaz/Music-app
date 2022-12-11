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
        modelName: 'User'
    })

    User.associate = (models) => {
        //associations can be defined here 
        User.hasMany(models.Review)
    };

    // function will check if user provided password then hash it using bcrypt library and store that hash in passwordHash
    User.beforeSave((user,options) => {
        if(user.password) { 
            user.passwordHash = bcrypt.hashSync(user.password, 10);
        }
    });


    return User; 
}