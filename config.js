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
		"greeting":{"facebook":"quickReply","Text":"Choose Services"},
		"indianAirlines":{"facebook":"quickReply","Text":"Choose city"},
		"indianAirlines_Chennai":{"facebook":"card","Text":"Choose option"},
		"indianAirlines_Hyderabad":{"facebook":"quickReply", "Text":"Choose option"},
		"indianAirlines_Chennai_Timings":{"facebook":"quickReply" , "Text":"Choose day"},
		"indianAirlines_Chennai_Timings_Timeinfo":{"facebook":"card", "Text":"Click on Time to Book"},
		"indianAirlines_Chennai_Destinations":{"facebook":"quickReply", "Text":"Choose option"}
	}
};

module.exports = flightConfig;