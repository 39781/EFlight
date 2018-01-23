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
		"greeting":{"facebook":"quickReply","text":"Choose Services"},
		"indianAirlines":{"facebook":"quickReply","text":"Choose city"},
		"indianAirlines_Chennai":{"facebook":"card","text":"Choose option"},
		"indianAirlines_Hyderabad":{"facebook":"quickReply", "text":"Choose option"},
		"indianAirlines_Chennai_Timings":{"facebook":"quickReply" , "text":"Choose day"},
		"indianAirlines_Chennai_Timings_Timeinfo":{"facebook":"card", "text":"Click on Time to Book"},
		"indianAirlines_Chennai_Destinations":{"facebook":"quickReply", "text":"Choose option"}
	}
};

module.exports = flightConfig;