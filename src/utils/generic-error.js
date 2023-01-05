
class genericError extends Error{
    constructor(name, message , explanation , statuscodes){
        super();
        this.name = name;
        this.explanation = explanation;
        this.message = message;
        this.statuscodes = statuscodes
    }
}

module.exports = genericError;