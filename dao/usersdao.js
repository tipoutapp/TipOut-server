const userModel = require('../models/user');
const debug = require('debug')('dev::');


exports.createInBatchUsers = async (users) => {
    try {
        debug('uploding json [+ users]');
        await users.map(async record => {
            try{
                const record_i = new userModel(record);
                // debug(record_i)
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

exports.updateUserSuggestions = async id => {
    try {
        const filter = {_id: id};
        const update = {suggestionsML: [1,5,3]}
        return await userModel.findOneAndUpdate(filter,update);
    } catch (error) {
        throw error
    }
}


