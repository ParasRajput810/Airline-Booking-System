const {StatusCodes} = require("http-status-codes");

class serviceError extends Error{

    constructor(message="Something went wrong ",
        explanation="Something went wrong in service Please try again later",
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ){
        super();
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }

}

module.exports = serviceError;