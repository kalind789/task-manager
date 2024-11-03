const express = require('express')
const router = express.Router()

// define a sample route
router.get('/',(req, res) => { res.send('Task manager home!'); });

module.exports = router;
