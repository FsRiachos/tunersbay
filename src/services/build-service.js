const builds = require('./data.json');

exports.getBuilds = () => {
    return new Promise((response, request) => {
        response(
            builds.map(build => ({
                _id: build._id,
                title: build.title,
                author: build.author,
            }))
        );
    })
};

exports.getBuild = id => {
    return new Promise((response, request) => {
        response(builds.find(build => build._id == id));
    })
};

exports.insertBuild = body => {
    return new Promise((response, request) => {
        response({ inserted: 1 });
    })
};

exports.updateBuild = (id, body) => {
    return new Promise((response, request) => {
        response({ updated: 1 });
    })
};

exports.removeBuild = id => {
    return new Promise((response, request) => {
        response({ removed: 1 });
    })
};