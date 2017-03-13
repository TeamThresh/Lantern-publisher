var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');

module.exports.publish = function(uid, mode) {
	switch(mode) {
	case 'deep':
		client.publish(uid, 'deep profiling',{qos:2});
		break;
	}
}