const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

/* GET home page. */
router.get('/postcode', async (req, res, next) => {
    const { q } = req.query;
    const resposne = await fetch(
        `https://uk.api.just-eat.io/restaurants/bypostcode/${q}`
    );
    const data = await resposne.json();
    res.json(data);
});

module.exports = router;
