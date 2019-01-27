const path = require('path');

// mainModule refers to the module that started application
module.exports = path.dirname(process.mainModule.filename);
