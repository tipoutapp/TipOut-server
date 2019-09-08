const userModel = require('../models/user');
const debug = require('debug')('dev::');


exports.createInBatchUsers = async (users) => {
    try {
        debug('uploding json [+ users]');
        await users.map(async record => {
            try{
                const record_i = new userModel(record);
                debug(record_i)
                await userModel.collection.insertOne(record_i);
            }catch(err){
                debug(err);
            }
        });
    } catch (error) {
        debug(error);
    }
   
};

exports.getByIDS = async id => {
    try {
        return await userModel.findById(id);
    } catch (error) {
        throw error
    }
}


