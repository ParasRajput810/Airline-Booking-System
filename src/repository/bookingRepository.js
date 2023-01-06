const {BookingInfo} = require("../models/index");
const {validationError ,appError} = require("../utils/index");
const {StatusCodes} = require("http-status-codes")
class BookingRepository {
    async create(data){
        console.log(data);
        try {
            const booking = await BookingInfo.create(data);
            return booking;    
        } catch (error) {
            if(error.name = "SequelizeValidationError"){
                throw error ; 
            }
            throw new appError(error.name , "Something went wrong" , "Something went wrong while creating booking" , StatusCodes.INTERNAL_SERVER_ERROR);
        }
        
    }
}

module.exports = BookingRepository;