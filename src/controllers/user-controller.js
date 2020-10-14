const userService = require('../services/user-sequelize.js');
const jwt = require('../helpers/jwt.js');

exports.register = (req, res) => {
    userService
        .register(req.body.username, req.body.password, req.body.role)
        .then(() => res.status(200).json({ success: true }))
        .catch((message) => res.status(500).send(message));
};

exports.login = (req, res) => {
    userService
        .authenticate(req.body.username, req.body.password)
        .then((payload) => jwt.createToken(payload))
        .then((data) => res.json(data))
        .catch((error) => res.status(500).send(error.message));
};

exports.getBuilds = (req, res) => {
    userService
        .getBuilds(req.client)
        .then((result) => res.json(result))
        .catch((err) => res.status(500).send(err.message));
};
exports.addBuild = (req, res) => {
    userService
        .addBuild(req.client, req.params.id)
        .then(() => res.json({ success: true }))
        .catch((err) => res.status(500).send(err.message));
};
exports.removeBuild = (req, res) => {
    userService
        .removeBuild(req.client, req.params.id)
        .then(() => res.json({ success: true }))
        .catch((err) => res.status(500).send(err.message));
};
