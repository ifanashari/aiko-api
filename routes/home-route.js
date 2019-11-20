const express = require('express');
const router = express.Router();
const homeModel = require('./../models/home-model')


router.get('/', (req, res) => {
    const response = {
        message: "Alpha in the house"
    }

    res.send(response)
})

router.post('/', async (req, res) => {
    const message = new homeModel({
        headerTitle: req.body.message
    })

    const result = await message.save()
    res.json(result)
})

module.exports = router