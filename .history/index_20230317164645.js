const functions = require('firebase-functions');
const app = require('./path/to/your/express/app');
exports.api = functions.https.onRequest(app);
