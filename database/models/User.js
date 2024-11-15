module.exports = function(sequelize, datatypes){

    let alias = "User";

    let cols = {
        id : {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER
        },
        name:{
            type: datatypes.STRING(100)
        },
        email:{
            type: datatypes.STRING(255)
        },
        password:{
            type: datatypes.STRING(255)
        }
    };

    let config = {
        tablename: "USERS",
        timestamps: true,
        underscored: true
    };

    const User = sequelize.define(alias, cols, config)

    //acá falta la relación

    return User
}

