const debug = require("debug")("tipout:data_managment-controller");

const BusinessJSON = require('../examples/businesses');
const UsersJSON = require('../examples/users');
// const UsersJSON = require('../examples/data_fixed');

const businessDAO = require('../dao/businessdao');
const usersDAO = require('../dao/usersdao');

exports.populate = async (req,res,next) => {
    try{
        await businessDAO.createInBatch(BusinessJSON);
        await usersDAO.createInBatchUsers(UsersJSON);
        return res.status(201).json({
            message: "Database Filled and Ready to Use!",
            // BusinessJSON
          });
        // debug(' message: Database Filled and Ready to Use!,');
        //   next();
    }catch(err){
        debug(err);

        return res.status(500).json({
          message: "Error when trying to Populate the Database."
        });
    }  
};