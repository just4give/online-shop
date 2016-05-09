/**
 * Created by mithundas on 12/29/15.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    DEVELOPMENT: {

        rootPath: rootPath,
        smtp: "smtps://noreply.techfcous@gmail.com:"+process.env.ADMIN_EMAIL_PWD+"@smtp.gmail.com",
        adminEmail:"AppStackSolutions<noreply.techfcous@gmail.com>"

    },
    PRODUCTION: {
        rootPath: rootPath,
        smtp: "smtps://noreply.techfcous@gmail.com:"+process.env.ADMIN_EMAIL_PWD+"@smtp.gmail.com",
        adminEmail:"AppStackSolutions<noreply.techfcous@gmail.com>"
    }
}