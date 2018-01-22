var flightConfig 	= 	require('./flightConfig');

var responses = {};

responses.generateResponse = function(action){
	
var responseType = flightConfig.intentActionResponseTypes[action];
var faceResponseTemplate = flightConfig.facebookResponseTemplate[responseType];
if(action == "greeting"){
	responseContent = Object.keys(flightConfig.flightServices),
}else{
	var actionSplitArr = action.split('_');	
	var length = actionSplitArr.length;
	if(length == 1){
		responseContent = flightConfig.flightServices[actionSplitArr[0]].cities;
	}else if(length == 2){
		responseContent = Object.keys(flightConfig.flightServices[actionSplitArr[0]].cities[actionSplitArr[1]]);
	}else{
		switch(actionSplitArr[length-1]){
			"Timings":break;
			"Timeinfo":break;			
		}	
	}
	
}

		
var responseContent ={
	"greeting":Object.keys(flightConfig.flightServices),
	"indianAirlines":flightConfig.flightServices["indianAirlies"].cities,
	"indianAirlines_Chennai": Object.keys(flightConfig.flightServices["indianAirlies"].cities["Chennai"]),
	"indianAirlines_Hyderabad":Object.keys(flightConfig.flightServices["indianAirlies"].cities["Hyderabad"]),
	"indianAirlines_Chennai_Timings":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
	"indianAirlines_Chennai_Timings_Timeinfo":
	"indianAirlines_Chennai_Destinaions":
}

}

