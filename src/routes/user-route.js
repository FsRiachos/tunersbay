const userController = require('../controllers/user-controller');
const router = require('express').Router();
const authorize = require("../configs/authorization");
const roles = require("../helpers/roles.js");

router.post('/register', userController.register);
router.post('/login', userController.login);


router.get("/build", authorize(), userController.getBuilds);
router.post("/build/:id", authorize(), userController.addBuild);
router.delete("/build/:id", authorize(), userController.removeBuild);


module.exports = router;