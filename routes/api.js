var express = require('express');
var router = express.Router();

router.get('/user', function(req, res) {
    res.send(req.user);
});

module.exports = router;
