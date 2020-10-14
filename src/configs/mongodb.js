const MongoClient = require('mongodb').MongoClient;
const mongodb = new MongoClient(process.env.MONGO_URI);

const connectDB = () => {
    return new Promise((resolve, reject) => {
        mongodb.connect(err => {
            if (err) reject(err);
            else resolve();
        });
    });
};
const getDB = () => mongodb.db('tunersbay');
const disconnectDB = () => _db.close();

module.exports = { connectDB, getDB, disconnectDB };
