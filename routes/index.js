var express = require('express');
var router = express.Router();
var rylaMqtt = require('../mqtt/publisher.js');

router.post('/publish', function(req, res, next) {
	var uid = req.body.uid;
	var mode = req.body.mode;

	rylaMqtt.publish(uid, mode);
	console.log(uid + " : " + mode);

	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('{"response" : "complete"}');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
