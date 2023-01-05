const BookingRepository = require("../repository/bookingRepository");


class BookingService {
    constructor(){
        this.bookingrepository =  new BookingRepository();
    }
    async create(data){
        try {
            const booking = await this.bookingrepository.create(data);
            return booking;    
        } catch (error) {
            if(error.name = "Validation Error"){
                throw error
            }
            throw error;
        }
        
    }
}

module.exports = BookingService;