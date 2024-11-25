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
        description: {
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

    Product.associate = function(models) {  //.associate para establecer relacion 1:N
        Product.belongsTo(models.User, { //models."alias con el modelo que relaciono"
            as: "user",               //alias de la relacion (en minusucula)
            foreignKey: "user_id"      //un PK de otra tabla
        })};

    return Product
}
