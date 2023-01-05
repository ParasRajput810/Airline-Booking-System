const {StatusCodes} = require("http-status-codes");

class ValidationError extends Error{
    constructor(error){
        super();
        this.name = "Validation Error";
        let explanation = [];
        error.errors.forEach(err => {
            explanation.push(err.message);
        });
        this.explanation = explanation;
        this.message = "Error validating data sent in the request";
        this.statuscodes = StatusCodes.BAD_REQUEST;
    }
}
module.exports = ValidationError;