const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    mongoClient.connect('mongodb+srv://gaetangerard:azerty@cluster0-fqygu.gcp.mongodb.net/test?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected');
        callback(client);
    })
    .catch(err => console.log(err));
};

module.exports = mongoConnect;