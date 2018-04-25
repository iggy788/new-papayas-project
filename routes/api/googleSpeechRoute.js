//Take these keys in keys.js add the program to this one
const keys = require('../keys/keys');
const speech = require('@google-cloud/speech');
require('dotenv').config();

module.exports = (app) => {
    /* Google Speech  */
    app.post('/api/account/translate', (req, res, next) => {
        const {
            body
        } = req;
        let {
            file
        } = body;

        // Make sure file has been uploaded
        if (!file) {
            return res.send({
                success: false,
                message: 'Error: Must Upload an Audio File'
            });
        }
        file = file.toString('base64');
        console.log(file);
    })
}