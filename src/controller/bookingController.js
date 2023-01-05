const BookingService = require("../service/bookingService");

const bookingservice = new BookingService();

const create = async(req,res)=>{
    try {
        const booking = await bookingservice.create(req.body);
        return res.status(201).json({
            data : booking,
            err:{},
            success:true,
            message : "Booking created successfully"
        });    
    } catch (error) {
        return res.status(404).json({
            data : {},
            err:error,
            success :false,
            message : error.message
        })
    }
    

}

module.exports = {
    create,
}