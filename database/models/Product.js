module.exports = function(sequelize, datatypes){

    let alias = "Product";

    let cols = {
        id : {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER
        },
        name:{
            type: datatypes.STRING(100)
        },
        image:{
            type: datatypes.STRING(500)
        },
        user_id:{
            type: datatypes.INTEGER
        }
    };

    let config = {
        tablename: "PRODUCTS",
        timestamps: true,
        underscored: true
    };

    const Product = sequelize.define(alias, cols, config)

    //acá falta la relación

    return Product
}
