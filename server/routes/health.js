const express = require('express');
const router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
    res.send('OK');
});

module.exports = router;
