const db = require('../configs/sequelize.js').getDB();
exports.getBuilds = () => {
    return new Promise((resolve, reject) => {
        db.builds
            .findAll({ attributes: ['_id', 'title', 'author'] })
            .then(builds => resolve(builds))
            .catch(err => reject(err));
    });
};
exports.getBuild = id => {
    return new Promise((resolve, reject) => {
        db.builds
            .findByPk(id)
            .then(build => resolve(build))
            .catch(err => reject(err));
    });
};
exports.insertBuild = body => {
    return new Promise((resolve, reject) => {
        db.builds
            .create(body)
            .then(build => resolve({ inserted: 1, _id: build._id }))
            .catch(err => reject(err));
    });
};