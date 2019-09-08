
const debug = require('debug')('dev::');
const businessModel = require("../models/business");



// exports.create = async data => {
//     try {
//       const restaurant = new businessModel(data);
//       return await restaurant.save();
//     } catch (err) {
//       throw err;
//     }
//   };

exports.createInBatch = async (businesses) => {
    try{

        debug('uploading json [+ businesses]');
        await businesses.map(async record => {
            try{
                const record_i = new businessModel(record);
                debug(record_i);
                await businessModel.collection.insertOne(record_i);
            }catch(err){
                debug(err);
            }
            
        });
    }catch(err){
        throw err;
    }
};

exports.getByIDS = async id => {
    try {
        return await businessModel.findById(id);
        
    } catch (error) {
        throw err;
    }
}

exports.getIDSList = async id => {
    try {
        return await businessModel.find({ '_id': { $in: id } });
    } catch (error) {
        throw error;
    }
}

exports.update = async (id, data) => {
    try {
      return await businessModel.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      );
    } catch (err) {
      throw err;
    }
  };