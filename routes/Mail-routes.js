

const router = require('express').Router();
const { mailController } = require('../controllers/mail-Controller');


router.post('/mail', mailController);



module.exports = router;