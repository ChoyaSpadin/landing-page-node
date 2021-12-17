const database = require("./../database");
const Sequelize = require("sequelize");

const Champions = database.define("champions", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name_: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        hp:  {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        atk:  {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        def:  {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        spd:  {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        crit_dmg:  {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        crit_rate:  {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        accuracy:  {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        resistance:  {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        basic_atk:  {
            type: Sequelize.STRING,
            allowNull: false,
        },
        skill_1:  {
            type: Sequelize.STRING,
            allowNull: false,
        },
        role_:  {
            type: Sequelize.STRING,
            allowNull: false,
        },
        species:  {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cost_:  {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

module.exports = Champions;




