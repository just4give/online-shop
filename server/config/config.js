/**
 * Created by mithundas on 12/29/15.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost:27017/onlinestore',
        rootPath: rootPath,
        port: process.env.PORT || 3000,
        host     : "localhost",
        user     : "root",
        password : "root",
        database : "photos",
        connectionLimit: 50,
        apiContext:"http://localhost:3000",
        imageRepo:"/Users/mithundas/Project_Workspace"
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/onlinestore',
        port: process.env.PORT || 80,
        host     : "localhost",
        user     : "root",
        password : "root",
        database : "photos",
        connectionLimit: 50,
        apiContext:"http://localhost:3000",
        imageRepo:"/Users/mithundas/Project_Workspace"
    }
}