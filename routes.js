var express 		= require('express');
var router			= express.Router();	 
var botHandler		= require('./botHandlers');	


router.post('/botHandler',function(req, res){
	console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
	console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
	res.json({response:"response received"}).end();	
	/*if (request.body.result||req.body.queryResult) {
		botHandler.processRequest(req, res)
		.then(function(){
			
		})
		.catch(function(){
			
		})	
	} else {
		console.log('Invalid Request');
		return response.status(400).end('Invalid Webhook Request');
	}*/	
});


module.exports = router;

