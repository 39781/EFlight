var flightConfig = {
	 "facebookResponseTemplate" : {
	  'quickReply':{
			'facebook': {
				"text": "",
				"quick_replies": [
					{
						"content_type":"",
						"title": "",
						"payload": ""
					},					
				]
			}
		},
		'card':{	
			'facebook': {				
				"attachment":{
					"type":"template",
					"payload":{
						"template_type":"generic",
						"elements":[
							{
								'title': '',
								'subtitle': '',
								'image_url': '',
								'buttons': [
									{
										"type":"postback",
										"title":"",
										"payload":""
									}									
								]
							}
						]
					}
				}
			}
		}					
	},
	"flightServices":{
		"indianAirlines":{
			"imgUrl":"https://www.airlineratings.com/wp-content/uploads/uploads/air-india.jpg",
			"cities":["Chennai","Hyderabad","Delhi"]			
		},
		"jetAirways":{
			"imgUrl":"https://www.airlineratings.com/wp-content/uploads/uploads/air-india.jpg",
			"cities":["Chennai","Hyderabad","Delhi"]
		}
	}
	"intentActionResponseTypes":{
		"greeting":{"facebook":"quickReply"},
		"indianAirlines":{"facebook":"card"},
		"indianAirlines_Chennai":{"facebook":"quickReply"},
		"indianAirlines_Hyderabad":{"facebook":"quickReply"},
		"indianAirlines_Chennai_Timings":{"facebook":"quickReply"},
		"indianAirlines_Chennai_Timings_Timeinfo":{"facebook":"card"}
		"indianAirlines_Chennai_Destinaions":{"facebook":"quickReply"}
	}
};
module.exports = flightConfig;