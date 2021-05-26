const Db = require('../../acronym.json')

exports.GetData = async( req, res) => {      
    try {
        res.status(200).send({data: Db})
    } catch (error) {
        res.status(500).send('Something broke!');
    }
}


exports.PostNewAcronym = async( req, res ) => {
    try {
        
    } catch (error) {
        
    }
}