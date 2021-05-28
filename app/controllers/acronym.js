const fs = require('fs')
const Db = require('../../acronym.json')


/**
 * 
 * Get data for the acronym.json
 */
exports.GetData = async (req, res) => {
    try {
        res.status(200).send({
            success: 'List of Acronym',
            data: Db
        })
    } catch (error) {
        res.status(404).send('Not Found Acronyms 😥');
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

/**
 * 
 * Method: PUT 
 * update a specific  acronym for the acronym.json file
 */




exports.UpdateAcronym = async (req, res) =>{
    try {
        let {acronym /*, definition*/} = req.query
        
        const ind =0
        const element =  Db.filter(a =>{
           
            let keys = Object.keys(a);
            //console.log(keys[0],index)
            if(keys[0] === acronym){
                 
                
                return a[keys[0]];
            }
        })
        console.log(ind)
        res.status(200).send(element)
    } catch (error) {
        res.status(500).send(error);
    }
}