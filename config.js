var flightConfig = {	 
	"flightServices":{
		"imgUrl":"https://www.airlineratings.com/wp-content/uploads/uploads/air-india.jpg",
		"indianAirlines":{
			"imgUrl":"https://www.airlineratings.com/wp-content/uploads/uploads/air-india.jpg",
			"cities":["Chennai","Hyderabad","Delhi"]			
		},
		"jetAirways":{
			"imgUrl":"https://www.airlineratings.com/wp-content/uploads/uploads/air-india.jpg",
			"cities":["Chennai","Hyderabad","Delhi"]
		}
	},
	"intentActionResponseTypes":{
		"greeting":{"facebook":"quickReply"},
		"indianAirlines":{"facebook":"quickReply"},
		"indianAirlines_Chennai":{"facebook":"card"},
		"indianAirlines_Hyderabad":{"facebook":"quickReply"},
		"indianAirlines_Chennai_Timings":{"facebook":"quickReply"},
		"indianAirlines_Chennai_Timings_Timeinfo":{"facebook":"card"},
		"indianAirlines_Chennai_Destinations":{"facebook":"quickReply"}
	}
};

module.exports = flightConfig;