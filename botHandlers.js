var responses 		=	require('./');
var botHandlers = {};

botHandlers.processRequest = function(req, res){
	return new Promise(function(resolve, reject){
		let action = request.body.result.action; // https://dialogflow.com/docs/actions-and-parameters
		let parameters = request.body.result.parameters; // https://dialogflow.com/docs/actions-and-parameters
		let inputContexts = request.body.result.contexts; // https://dialogflow.com/docs/contexts
		let requestSource = (request.body.originalRequest) ? request.body.originalRequest.source : undefined;	
		let requestText = (request.body.originalRequest.data.message)?request.body.originalRequest.data.message.text:'';
		const googleAssistantRequest = 'google'; // Constant to identify Google Assistant requests
		const app = new DialogflowApp({request: request, response: response});
		generateResponse(requestSource, action)
		.then(function(responseJson){
			responseJson.contextout = inputContexts;
			resolve(responseJson);	
		})
		.catch(function(err){
			reject(err);			
		});				
	}
}

function generateResponse(requestSource, action){
	return new Promise(function(resolve, reject){
		var a=[];
		var responses = require(requestSource+".js".toLowerCase());
		responses.generateResponse(action)
		.then(function(resp){
			resolve(resp);
		})
		.catch(function(err){
			reject(err);
		})	
	});
}
module.exports = botHandlers;