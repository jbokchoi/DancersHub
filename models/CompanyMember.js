var mongoose = require("mongoose");

var CompanyMemberSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    companyMemberProfile: CompanyMemberProfileSchema
  },
  {
    timestamps: true
  }
);

var CompanyMemberProfileSchema = new mongoose.Schema(
  {
    about: String,
    companyType: {
      type: String,
      enum: [
        "Dance Company",
        "Dance School",
        "Community Dance Organisation",
        "University",
        "College",
        "Vocational School",
        "Theatre/Dance Venue",
        "Dance Studio",
        "Healthcare Studio"
      ]
    },
    facilities: [FacilitySchema],
    contactDetails: [{ type: Schema.Types.ObjectId, ref: "ContactDetail" }],
    location: {
      city: String,
      country: String
    },
    staff: [{ type: Schema.Types.ObjectId, ref: "MemberProfile" }],
    followedMembers: [{ type: Schema.Types.ObjectId, ref: "MemberProfile" }],
    followedCompanies: [
      { type: Schema.Types.ObjectId, ref: "CompanyMemberProfile" }
    ]
  },
  {
    timestamps: true
  }
);

var FacilitySchema = new mongoose.Schema({
  facilityType: {
    type: String,
    enum: ["theatre", "studio", "treatment room", "lecture space", "green room"]
  },
  size: String,
  availableForRent: Boolean,
  price: String
});

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

module.exports = mongoose.model("CompanyMember", CompanyMemberSchema);
