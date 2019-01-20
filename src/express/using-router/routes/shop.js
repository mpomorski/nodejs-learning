const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  // holds absolute path to directory name of this module
  // this way works on all OS, do not concatenate yourself
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
