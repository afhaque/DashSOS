var express = require('express');
var router = express.Router();
var client = require('twilio')('ACc5dcfd7386c6a8703808b867f4c347f1', 'f9e1ead06ec396e489bef482799f5863');

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Express' });
=======
  res.render('index', { title: 'Login' });
>>>>>>> 7bcff96992746382f228ee7828064ef9ec1b01b8
});  



/* GET home page. */
<<<<<<< HEAD
router.get('/dash/', function(req, res, next) {
  res.render('dash', { title: 'Dash' });
});

/* GET home page. */
=======
/*router.get('/dash/', function(req, res, next) {
  res.render('dash', { title: 'Dash' });
});*/

/* GET dash clicks. */
>>>>>>> 7bcff96992746382f228ee7828064ef9ec1b01b8
router.get('/dash/', function(req, res, next) {

	//Send an SMS text message
client.sendMessage({

<<<<<<< HEAD
    to:'+12018899783', // Any number Twilio can deliver to
=======
    to:'+16095050940', // Any number Twilio can deliver to
>>>>>>> 7bcff96992746382f228ee7828064ef9ec1b01b8
    from: '+8622363840', // A number you bought from Twilio and can use for outbound communication
    body: 'testing 123.' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }
});
  res.render('dash', { title: 'Dash' });


});

module.exports = router;
