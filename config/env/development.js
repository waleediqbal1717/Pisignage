'use strict';

module.exports = {
    env: 'development',
    https: false,
    port: process.env.PORT || 4000,
    mongo: {
        uri: 'mongodb://mongo:27017/pisignage-server-dev' ,
        options: {useMongoClient: true}
    }
};