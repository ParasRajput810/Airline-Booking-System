const BookingService = require("../service/bookingService");

const bookingservice = new BookingService();

const sendConfirmationMail = require("../utils/sendConfirmation");


class BookingController{

   async create(req,res ){
        console.log(req.body); 
        try {
            const booking = await bookingservice.create(req.body);
            const data = {message : "Successfully created a ticket" , RecipientEmail : "pr8101999@gmail.com" , service : "Mail_service"};
            console.log({...data , payload : req.body});
            await sendConfirmationMail({...data , payload : req.body});
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