const express = require('express')
const router = express.Router()

const controller = require('../controllers/acronym')

const path = 'acronym'

/**
 * Route: /acronym GET
 */
router.get(
    `/${path}`,
    controller.GetData
)

router.post(
    `/${path}`,
    controller.PostNewAcronym
)

router.put(
    `/${path}`,
    controller.UpdateAcronym
)


module.exports = router