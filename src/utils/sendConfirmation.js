const {createChannel , publishMsg} = require("./messageQueue");

const {REMINDER_BINDING_KEY } = require("../config/serverConfig");

async function sendmessage(msg){
    try {
        const channel = await createChannel();
        publishMsg(channel , REMINDER_BINDING_KEY , JSON.stringify(msg));
        // return res.status(201).json({
        //     err:{},
        //     success:true,
        //     message : "Queue created successfully"
        // })
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = sendmessage;