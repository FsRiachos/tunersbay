const db = require('../configs/mongodb.js').getDB();
const ObjectId = require('mongodb').ObjectID;


exports.getBuilds = () => {
    return new Promise((resolve, reject) => {
        db
            .collection('builds')
            .find()
            .project({ 'title': 1, 'author': 1 })
            .toArray()
            .then(builds => resolve(builds))
            .catch(err => reject(err));
    });
};

exports.getBuild = id => {
    return new Promise((resolve, reject) => {
        db
            .collection('build')
            .findOne({ _id: ObjectId(id) })
            .then(build => resolve(build))
            .catch(err => reject(err));
    });
};

exports.updateBuild = (id, body) => {
    return new Promise((resolve, reject) => {
        db
            .collection('builds')
            .updateOne(
                { _id: ObjectId(id) },
                {
                    $set: {
                        title: body.title,
                        collection: body.collection,
                        author: body.author,
                        publish_year: body.publish_year,
                    }
                })
            .then(() => resolve({ updated: 1 }))
            .catch(err => reject(err));
    });
};

exports.removeBuild = (id, body) => {
    return new Promise((resolve, reject) => {
        db
            .collection('builds')
            .deleteOne({_id: ObjectId(id) })
            .then(() => resolve({ removed: 1 }))
            .catch(err => reject(err));
    });
};

exports.insertBuild = body => {
    return new Promise((resolve, reject) => {
        db
            .collection('builds')
            .insertOne({ title: body.title, collection: body.collection, author: body.author, publish_year: body.publish_year })
            .then(res => resolve({ inserted: 1, _id: res.insertedId }))
            .catch(err => reject(err));
    });
};