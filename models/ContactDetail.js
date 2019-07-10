var mongoose = require("mongoose");

var ContactDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "website"
  },
  link: String,
  phoneNumber: Number,
  address: String,
  postalCode: String
});

module.exports = mongoose.model("ContactDetail", ContactDetailSchema);
