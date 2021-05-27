const fs = require('fs')
const Db = require('../../acronym.json')


/**
 * 
 * Get data for the acronym.json
 */
exports.GetData = async (req, res) => {
    try {
        res.status(200).send({
            data: Db
        })
    } catch (error) {
        res.status(500).send('Something broke!');
    }
}

/**
 * 
 * Post new acronym for the acronym.json file
 */
exports.PostNewAcronym = async (req, res) => {
    try {
        let data = Db
        let {acronym , definition} = req.query

        data.push({[acronym]:definition})

        fs.writeFile('acronym.json',JSON.stringify(data) ,(err => {
            if (err) throw console.log(err);
        }))
        
        res.status(200).send({success: 'New Acronym Added'})
    } catch (error) {
        res.status(500).send(error);
    }
}