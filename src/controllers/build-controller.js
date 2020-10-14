const buildService = require('../services/build-sequelize.js');

exports.getBuilds = (req, res) => {
    buildService
        .getBuilds ()
        .then (result => res.json(result))
        .catch (err => res.status(500).send (err.message));
};

exports.getBuild = (req, res) => {
    buildService
        .getBuild (req.params.id)
        .then (result => res.json (result))
        .catch (err => res.status(500).send(err.message));
};

exports.insertBuild = (req, res) => {
    buildService
        .insertBuild (req.body)
        .then (result => res.json(result))
        .catch (err => res.status(500).send(err.message));
};

exports.updateBuild = (req, res) => {
    buildService
        .updateBuild (req.params.id, req.body)
        .then (result => res.json(result))
        .catch (err => res.status(500).send(err.message));
};

exports.removeBuild = (req, res) => {
    buildService
        .removeBuild (req.params.id)
        .then (result => res.json(result))
        .catch (err => res.status(500).send(err.message));
};