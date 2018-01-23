var flightConfig 	= 	require('./config');

var responses = {};

responses.generateResponse = function(action,requestText){
	return new Promise(function(resolve, reject){
		console.log('generate Response started');
		var responseContent={
			title :"",
			subtitle:"Choose Option",
			imgUrl:"",
			data:""	
		};		
		if(action == "greeting"){
			responseContent.title = 'Welcome';
			responseContent.imgUrl = flightConfig.flightServices.imgUrl;
			responseContent.data = Object.keys(flightConfig.flightServices);			
		}else{
			var actionSplitArr = action.split('_');	
			console.log(actionSplitArr);
			var length = actionSplitArr.length;			
			responseContent.title = actionSplitArr[0];
			responseContent.imgUrl = flightConfig.flightServices[actionSplitArr[0]].imgUrl;			
			if(length == 1){			
				responseContent.data = flightConfig.flightServices[actionSplitArr[0]].cities;
			}else if(length == 2){				
				responseContent.data = require('./'+actionSplitArr[1].toLowerCase());
				responseContent.data = Object.keys(responseContent.data[actionSplitArr[0]]);				
			}else{				
				responseContent.data = require('./'+actionSplitArr[1].toLowerCase());				
				switch(actionSplitArr[length-1]){
					case "Timings"		:	responseContent.data = Object.keys(responseContent.data[actionSplitArr[0]]["Timings"]);
											break;
					case "Destinations"	:	responseContent.data = responseContent.data[actionSplitArr[0]]["Destinations"];
											break
					case "Timeinfo"		:	responseContent.data = responseContent.data[actionSplitArr[0]]["Timings"][requestText];
											break;			
				}	
			}
			
		}		
		console.log(responseContent);
		console.log(flightConfig.intentActionResponseTypes[action]['facebook']);
		generateResponseTemplate(responseContent, flightConfig.intentActionResponseTypes[action]['facebook'])
		.then((resp)=>{ 			
			//console.log(responseContent, responseViewModel);			
			return resp.templateGenerateFunc(resp.responseContent,resp.viewModel);
		})
		.then((resp)=>{
			resolve(resp); 
		})					
		.catch((err)=>{ reject(err) });		
	});
}

var generateResponseTemplate = function(responseContent, responseViewModel){
		console.log(responseViewModel);
	return new Promise(function(resolve, reject){		
		switch(responseViewModel.toLowerCase()){
			case "quickreply": resolve({"templateGenerateFunc":generateQuickReplyResponse,"responseContent":responseContent,"viewModel":responseViewModel});break;
			case "card": resolve({"templateGenerateFunc":generateCardResponse,"responseContent":responseContent,"viewModel":responseViewModel});break;
		}
	});
}

var generateQuickReplyResponse = function(responseContent, responseViewModel){
	return new Promise(function(resolve, reject){
		console.log('generating quick reply Started');				
		let responseTemplate = {};
		responseTemplate.displayText = "";
		responseTemplate.data = {
			'facebook': {
				"text": "Choose flight services/Options",
				"quick_replies": []
			}
		};		
		responseContent.data.forEach(function(resp){
			if(resp !='imgUrl'){
				responseTemplate.data.facebook.quick_replies.push({			
					"content_type":"text",
					"title": resp,
					"payload": resp
				});
			}
		})		
		resolve(responseTemplate);
	});
}

var generateCardResponse = function(responseContent, responseViewModel){	
	return new Promise(function(resolve, reject){
		console.log('generating card reply Started');
		let responseTemplate = {};
		responseTemplate.displayText = "";
		responseTemplate.speech = "";
		responseTemplate.data = {
			'facebook': {				
				"attachment":{
					"type":"template",
					"payload":{
						"template_type":"generic",
						"elements":[]
					}
				}
			}
		};
		if(responseContent.data.length<=2){
			responseTemplate.data.facebook.attachment.payload.elements[0]={			
								'title': responseContent.title,
								'subtitle': responseContent.subtitle,
								'image_url': responseContent.imgUrl,
								'buttons': []							
			};
			responseContent.data.forEach(function(resp){
				responseTemplate.data.facebook.attachment.payload.elements[0].buttons.push({
					"type":"postback",
					"title":resp,
					"payload":resp
				});
			});
		}else{
			responseContent.data.forEach(function(resp){		
				responseTemplate.data.facebook.attachment.payload.elements.push({					
					'title': responseContent.title,
					'subtitle': responseContent.subtitle,
					'image_url': responseContent.imgUrl,
					'buttons': [
						{
							"type":"postback",
							"title":resp,
							"payload":resp
						}									
					]
				})	
			})			
		}
		console.log(responseTemplate);
		resolve(responseTemplate);					
	});
}
module.exports = responses;