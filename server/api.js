const express = require("express");
// initializing express
const app = express();



app.get("/flights", (req, res) => {

    let flights = [
        { id: 1, name: "flight1", flight_number: "fl1", airline_name: "Air India", departure_arrival_time: "10am", duration: "1900KM", no_of_stops: "1", price: "4500" , source_city: "Indore", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 2, name: "flight2", flight_number: "fl2", airline_name: "Air Asia", departure_arrival_time: "11am", duration: "1200KM", no_of_stops: "0", price: "3500" , source_city: "Bangalore", destination_city: "Indore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 3, name: "flight3", flight_number: "fl3", airline_name: "IndiGo", departure_arrival_time: "6am", duration: "1900KM", no_of_stops: "2", price: "4500" , source_city: "Indore", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 4, name: "flight4", flight_number: "fl4", airline_name: "SpiceJet", departure_arrival_time: "2am", duration: "1400KM", no_of_stops: "0", price: "2500" , source_city: "Indore", destination_city: "Bombay", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 5, name: "flight5", flight_number: "fl5", airline_name: "Vistara", departure_arrival_time: "7am", duration: "1100KM", no_of_stops: "0", price: "3500" , source_city: "Bombay", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 6, name: "flight6", flight_number: "fl6", airline_name: "Alliance Air", departure_arrival_time: "3am", duration: "1300KM", no_of_stops: "0", price: "4050" , source_city: "Hydrabad", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 7, name: "flight7", flight_number: "fl7", airline_name: "TruJet", departure_arrival_time: "10pm", duration: "1400KM", no_of_stops: "0", price: "4890" , source_city: "Indore", destination_city: "Hydrabad", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 8, name: "flight8", flight_number: "fl8", airline_name: "Go First", departure_arrival_time: "10pm", duration: "1500KM", no_of_stops: "1", price: "4500" , source_city: "Indore", destination_city: "Chennai", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 9, name: "flight9", flight_number: "fl9", airline_name: "Air India", departure_arrival_time: "1pm", duration: "1600KM", no_of_stops: "0", price: "2500" , source_city: "Chennai", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 10, name: "flight10", flight_number: "fl10", airline_name: "Air India", departure_arrival_time: "11pm", duration: "1900KM", no_of_stops: "0", price: "7500" , source_city: "Indore", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 11, name: "flight11", flight_number: "fl11", airline_name: "Air Asia", departure_arrival_time: "10am", duration: "1700KM", no_of_stops: "0", price: "9500" , source_city: "Indore", destination_city: "Ahamdabad", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 12, name: "flight12", flight_number: "fl12", airline_name: "Air Asia", departure_arrival_time: "1am", duration: "1600KM", no_of_stops: "0", price: "2500" , source_city: "Ahamdabad", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 13, name: "flight13", flight_number: "fl13", airline_name: "IndiGo", departure_arrival_time: "1am", duration: "1900KM", no_of_stops: "2", price: "5500" , source_city: "Indore", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 14, name: "flight14", flight_number: "fl14", airline_name: "SpiceJet", departure_arrival_time: "2pm", duration: "1200KM", no_of_stops: "0", price: "7500" , source_city: "Indore", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 15, name: "flight15", flight_number: "fl15", airline_name: "Vistara", departure_arrival_time: "10am", duration: "1900KM", no_of_stops: "0", price: "7500" , source_city: "Indore", destination_city: "Bhopal", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 16, name: "flight16", flight_number: "fl16", airline_name: "Alliance Air", departure_arrival_time: "1am", duration: "2100KM", no_of_stops: "2", price: "5500" , source_city: "Bhopal", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 17, name: "flight17", flight_number: "fl17", airline_name: "TruJet", departure_arrival_time: "11pm", duration: "1900KM", no_of_stops: "0", price: "4500" , source_city: "Indore", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 18, name: "flight18", flight_number: "fl18", airline_name: "Go First", departure_arrival_time: "10am", duration: "1000KM", no_of_stops: "0", price: "4200" , source_city: "Hydrabad", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 19, name: "flight18", flight_number: "fl19", airline_name: "Air Asia", departure_arrival_time: "1am", duration: "700KM", no_of_stops: "0", price: "3450" , source_city: "Bilaspur", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 20, name: "flight20", flight_number: "fl20", airline_name: "IndiGo", departure_arrival_time: "10am", duration: "900KM", no_of_stops: "0", price: "4500" , source_city: "Indore", destination_city: "Bilaspur", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 21, name: "flight21", flight_number: "fl21", airline_name: "SpiceJet", departure_arrival_time: "1am", duration: "1900KM", no_of_stops: "1", price: "6500" , source_city: "Indore", destination_city: "Udaipur", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 22, name: "flight22", flight_number: "fl22", airline_name: "Vistara", departure_arrival_time: "11pm", duration: "2100KM", no_of_stops: "2", price: "6700" , source_city: "Udaipur", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 23, name: "flight23", flight_number: "fl23", airline_name: "Alliance Air", departure_arrival_time: "12pm", duration: "1700KM", no_of_stops: "0", price: "7800" , source_city: "Indore", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 24, name: "flight24", flight_number: "fl24", airline_name: "TruJet", departure_arrival_time: "10am", duration: "1200KM", no_of_stops: "0", price: "4340" , source_city: "Indore", destination_city: "Nagpur", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
        { id: 25, name: "flight25", flight_number: "fl25", airline_name: "Go First", departure_arrival_time: "11pm", duration: "1900KM", no_of_stops: "0", price: "4890" , source_city: "Nagpur", destination_city: "Bangalore", travel_date: "2021-08-15T10:00:00Z" , return_date: "2021-08-15T01:00:00Z"},
    ];

    //filter 
    const source_city = req.query.source_city;
    const destination_city = req.query.destination_city;
    const travel_date = req.query.travel_date;
    const return_date = req.query.return_date;

    if(source_city !== "" || destination_city !== "" ||travel_date !== "" ||return_date !== "" ){
        if(source_city !== ""){
            flights = flights.filter(obj=>obj.source_city ==  source_city) ;
        }
        if(destination_city !== ""){
            flights = flights.filter(obj=>obj.destination_city ==  destination_city) ;
        }
        if(travel_date !== ""){
            flights = flights.filter(obj=>{
                let db_travel_date = obj.travel_date.split("T")
                return db_travel_date[0] ==  travel_date
            }) ;
        }
        if(return_date !== ""){
            flights = flights.filter(obj=>obj.return_date ==  return_date) ;
        }
        
    }
    const page = parseInt(req.query.page)+1;
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = {};

    if (endIndex < flights.length) {
        result.next = {
            page: page + 1,
            limit: limit,
        };
    }
    if (startIndex > 0) {
        result.previous = {
            page: page - 1,
            limit: limit,
        };
    }
    result.results = flights.slice(startIndex, endIndex);
    result.totalRows = [{count:flights.length}]
    res.json(result);
});

// creating a port for server to listen on
app.listen(3500, () => {
    console.log("server started on port 3500");
});
