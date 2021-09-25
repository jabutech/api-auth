// Require package `dotenv'
const dotenv = require("dotenv");
// Use `dotenv`
dotenv.config();

// Export environment variable
module.exports = {
  // Read variable from file.env
  // Variable `service_name`
  serviceName: process.env.SERVICE_NAME,
};
