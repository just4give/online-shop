/**
 * Created by mithundas on 12/29/15.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {

        rootPath: rootPath,

    },
    production: {
        rootPath: rootPath,

    }
}