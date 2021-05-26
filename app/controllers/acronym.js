const Db = require('../../acronym.json')

exports.GetData = async( req, res) => {      
    try {
        res.send({data: Db})
    } catch (error) {
        res.status(500).send('Something broke!');
    }
}