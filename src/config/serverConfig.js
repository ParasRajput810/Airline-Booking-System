const dotenv =  require("dotenv");

dotenv.config();
module.exports = {
    PORT : process.env.PORT,
    Flight_Route : process.env.Flight_Route
}