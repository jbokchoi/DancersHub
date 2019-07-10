var mongoose = require("mongoose");

var MemberSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    memberProfile: MemberProfileSchema
  },
  {
    timestamps: true
  }
);

var MemberProfileSchema = new mongoose.Schema(
  {
    about: String,
    professionalAreas: {
      type: String,
      enum: [
        "Dancer",
        "Choreographer",
        "Movement Director",
        "Mass Movement",
        "Dance Teacher",
        "Dance Lecturer",
        "Somatic Practitioner",
        "Healthcare Practitioner",
        "Dance Scientist",
        "Dance Critic",
        "Dance Admin",
        "Dance Management"
      ]
    },
    gender: {
      type: String,
      enum: ["female", "male", "other", "prefer not to say"]
    },
    jobTitle: String,
    location: {
      city: String,
      country: String
    },
    contactDetails: [{ type: Schema.Types.ObjectId, ref: "ContactDetail" }],
    qualifications: [QualificationSchema],
    employment: [EmploymentSchema],
    followedMembers: [{ type: Schema.Types.ObjectId, ref: "MemberProfile" }],
    followedCompanies: [
      { type: Schema.Types.ObjectId, ref: "CompanyMemberProfile" }
    ]
  },
  {
    timestamps: true
  }
);

var QualificationSchema = new mongoose.Schema({
  schoolOrAcademicProgramme: String,
  gradYear: Number,
  location: String
});

var EmploymentSchema = new mongoose.Schema({
  yearFrom: Number,
  yearTo: Number,
  nameOfCompany: String,
  jobTitle: String,
  location: String
});

module.exports = mongoose.model("Member", MemberSchema);
