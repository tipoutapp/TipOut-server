const userDAO = require('../dao/usersdao');
const debug = require('debug')('dev::');

exports.getUserById = async (req, res, next) => {
    debug(req.params.id);
    try {
        const { headers, params } = req;
        const { id } = params;
        
        const user = await userDAO.getByIDS(id);
        debug(user);
        return res.status(200).json(
            {message: 'found',
            res: user});
    } catch (error) {
        debug(error);
        return res.status(500).json({
            message: 'error on reading id of business'
        });
    };
}

// exports.getUserById = async (req, res, next) => { res.send('found')}