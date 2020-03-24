// Hello Node.js (use debug method)
// Node.js is great!! (use info method)
// Warning, Warning, I think we have a Warning (use warn method)
// Mayday Mayday, we have an errro, repeat.. we have an error (use error method)

const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hello Node.js`);
// logger.log(`This is a log message`); // alias for debug()
logger.info(`Node.js is great!!`);
logger.warn(`Warning, Warning, I think we have a Warning`);
logger.error(`Mayday Mayday, we have an errro, repeat.. we have an error`);