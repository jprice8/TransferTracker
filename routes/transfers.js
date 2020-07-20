const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// GET "/"
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'transfers.html'));
});

module.exports = router;