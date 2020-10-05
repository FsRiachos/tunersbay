const router = require("express").Router();
const buildController = require('../controllers/build-controller.js');

router.get('', buildController.getBuilds);
router.get('/:id', buildController.getBuild);
router.post('', buildController.insertBuild);
router.put('/:id', buildController.updateBuild);
router.delete('/:id', buildController.removeBuild);

module.exports = router;