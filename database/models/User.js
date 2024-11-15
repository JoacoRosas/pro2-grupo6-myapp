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

    User.associate = function(models) {    //.associate para establecer relacion N:1 en este caso
        User.hasMany(models.Product, {   //alias con el que me relaciono
            as: "products" ,               //alias de la relacion (en minusucula) --> como es relacion N:1 se puede poner en plural
            foreignKey: "user_id"      
        }) 
    }

    return User
}

