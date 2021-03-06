 // This may be confusing but here Sequelize (capital) references the standard library
 var Sequelize = require("sequelize");

 // sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
 var sequelize = require("../../config/connection.js");

 var contacts = sequelize.define("contacts", {
     uid: {
         type: Sequelize.INTEGER,
         allowNull: false,

     },
     cid: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true
     },
     cname: {
         type: Sequelize.STRING,
         allowNull: false
     },
    cphone: {
         type: Sequelize.STRING,
         allowNull: false
     }
 }, {
     timestamps: false
 });

 // Sync with DB
 contacts.sync();

 module.exports = contacts;
