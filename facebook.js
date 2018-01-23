var flightConfig 	= 	require('./config');

var responses = {};

responses.generateResponse = function(action){
	return new Promise(function(resolve, reject){
		console.log('generate Response started');
			
		var responseContent=[],text='';		
		if(action == "greeting"){
			responseContent = Object.keys(flightConfig.flightServices),
			text = "Please choose Services"
		}else{
			var actionSplitArr = action.split('_');	
			var length = actionSplitArr.length;
			if(length == 1){
				responseContent = flightConfig.flightServices[actionSplitArr[0]].cities;
			}else if(length == 2){
				responseContent = Object.keys(flightConfig.flightServices[actionSplitArr[0]].cities[actionSplitArr[1]]);
			}else{
				switch(actionSplitArr[length-1]){
					case "Timings":return true;break;
					case "Timeinfo":return true;break;			
				}	
			}
			
		}		
		generateResponseTemplate(responseContent, flightConfig.intentActionResponseTypes[action]['facebook'])
		.then((resp)=>{ 			
			//console.log(responseContent, responseViewModel);			
			return resp.templateGenerateFunc(resp.responseContent,resp.viewModel);
		})
		.then((resp)=>{
			resolve(resp); 
		})					
		.catch((err)=>{ reject(err) });

		
/*var responseContent ={
	"greeting":Object.keys(flightConfig.flightServices),
	"indianAirlines":flightConfig.flightServices["indianAirlies"].cities,
	"indianAirlines_Chennai": Object.keys(flightConfig.flightServices["indianAirlies"].cities["Chennai"]),
	"indianAirlines_Hyderabad":Object.keys(flightConfig.flightServices["indianAirlies"].cities["Hyderabad"]),
	"indianAirlines_Chennai_Timings":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
	"indianAirlines_Chennai_Timings_Timeinfo":
	"indianAirlines_Chennai_Destinaions":
}*/
	});
}

var generateResponseTemplate = function(responseContent, responseViewModel){	
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
		responseTemplate.data = JSON.parse(JSON.stringify(flightConfig.facebookResponseTemplate[responseViewModel]));
		responseTemplate.data.facebook.text = 'Choose ';
		responseTemplate.data.facebook.quick_replies.pop();
		responseContent.forEach(function(resp){		
			responseTemplate.data.facebook.quick_replies.push({			
				"content_type":"text",
				"title": resp,
				"payload": resp
			});
			
		})		
		resolve(responseTemplate);
	});
}

module.exports = responses;