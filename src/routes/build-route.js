const buildController = require('../controllers/build-controller');
const router = require("express").Router();

const authorize = require('../configs/authorization');
const roles = require('../helpers/roles.js');

router.get('', authorize(), buildController.getBuilds);
router.get('/:id', authorize(), buildController.getBuild);
router.post('', authorize(roles.Boss), buildController.insertBuild);
router.put('/:id', authorize(roles.Boss), buildController.updateBuild);
router.delete('/:id', authorize(roles.Boss), buildController.removeBuild);

module.exports = router;