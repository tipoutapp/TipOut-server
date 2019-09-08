let debug = require('debug')('dev::');

const businessDAO = require('../dao/businessdao');

exports.getBusinessById =  async (req, res, next) => {
    debug(req.params.id);
    try {
        const { headers, params } = req;
        const { id } = params;
        
        const business = await businessDAO.getByIDS(id);
        debug(business)
        return res.status(200).json(
            {message:'end',
            res: business});
    } catch (error) {
        debug(error);
        return res.status(500).json({
            message: 'error on reading id of business'
        });
    };
    
    
}

exports.getArrayIds = async (req, res, next) => {
  try {
    const { query } = req;
    let { id } = query;
    // id = id.map(i => parseInt(i));
    debug('passed ids::');
    debug(id);
    const idsDB = await businessDAO.getIDSList(id);
    return res.status(200).json({message: 'found', res: idsDB});
  } catch (error) {
    throw error;
  } 
}

exports.update = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        return res.status(400).json({
          message: `The field 'id' mandatory.`
        });
      }
  
      const business = await businessDAO.update(id, { ...req.body });
  
      if (business) {
        return res.status(200).json({
            business
        });
      }
  
      return res.status(404).json({
        message: "Business Not Found"
      });
    } catch (err) {
      debug(err);
  
      return res.status(500).json({
        message: "Error when trying to Update Business."
      });
    }
  };

  exports.update_test = (req,res,next) => {
    //   res.status(200).json({message:'fine'});
      res.status(200).json({
          message: req.params,
          BODYY: req.body
      })
  }