const { Router } = require("express");

const router = Router();

router.use('/', require('./authRouter'));
router.use('/', require('./articleRouter'));
router.use('/', require('./comentRouter'));

module.exports = router;