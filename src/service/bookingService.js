const BookingRepository = require("../repository/bookingRepository");
const axios = require("axios")
const {Flight_Route} = require("../config/serverConfig");

class BookingService {
    constructor(){
        this.bookingrepository =  new BookingRepository();
    }
    async create(data){
        try {
            const flightid = data.flightId;
            console.log(flightid);
            const flighturl = `${Flight_Route}/api/v1/fetch?id=${flightid}`;
            let status = "Inprocess";
            const status_update = {...data , status};
           
            const flight = await axios.get(flighturl);
            const flight_details = flight.data.data;
            if(data.noOfSeats > flight_details.totalSeats){
                throw{error : "Not Enough seats"};
            }
            const final_seats = flight_details.totalSeats - data.noOfSeats;
            const updated_flight = await axios.patch(`${Flight_Route}/api/v1/flight_update?id=${flightid}` , {totalSeats : final_seats});
            const totalCost = data.noOfSeats * flight_details.price;
            status = "booked";
            const final_data = {...data , totalCost , status};
            console.log(final_data)
            const bookedflight = this.bookingrepository.create(final_data);
            return bookedflight;

        } catch (error) {
            throw {error};
        }
      
        
    }

    
}

module.exports = BookingService;