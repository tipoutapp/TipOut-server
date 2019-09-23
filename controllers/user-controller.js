const userDAO = require('../dao/usersdao');
const businessDAO = require('../dao/businessdao');
const debug = require('debug')('dev::');


exports.getUserById = async (req, res, next) => {
    debug(req.params.id);
    try {
        const { headers, params } = req;
        const { id } = params;
        
        const user = await userDAO.getByIDS(id);
        const user_businesses = await businessDAO.getIDSList(user.suggestionsML);
        debug(user);
        return res.status(200).json(
            {message: 'found',
            res: {
                user: user,
                business: user_businesses
            }});
    } catch (error) {
        debug(error);
        return res.status(500).json({
            message: 'error on reading id of business'
        });
    };
}

exports.setSugg = async (req, res, next) => {
    debug(req.params.id);
    try{
        const {id} = req.params;
        debug(id);
        const user = await userDAO.updateUserSuggestions(id);        
        debug('user suggestions updated id: ' + id);
        return res.status(200).json(
            {message: 'updated',
            res: user});
    }catch(error){
        debug(error);
        return res.status(500).json({
            message: 'error on reading id of business'
        });
    };
}
// exports.getUserById = async (req, res, next) => { res.send('found')}