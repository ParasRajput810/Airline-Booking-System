const BookingService = require("../service/bookingService");

const bookingservice = new BookingService();

const {createChannel , publishMsg} = require("../utils/messageQueue");

const {REMINDER_BINDING_KEY } = require("../config/serverConfig");

class BookingController{

    async sendmessage(req,res){
        try {
            const channel = await createChannel();
            const msg = {message : "Success"};
            publishMsg(channel , REMINDER_BINDING_KEY , JSON.stringify(msg));
            return res.status(201).json({
                err:{},
                success:true,
                message : "Queue created successfully"
            })
        } catch (error) {
            console.log(error);
        }
        
    }

   async create(req,res ){

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

}




module.exports = BookingController;