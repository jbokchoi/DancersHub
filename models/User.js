var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

var Schema = mongoose.Schema;

var contactDetailSchema = new Schema({
  name: {
    type: String,
    default: "website"
  },
  link: String
});

var qualificationSchema = new Schema({
  schoolOrAcademicProgramme: String,
  gradYear: {
    type: Number,
    match: /\d{4}/
  },
  qualificationLocation: String
});

var employmentSchema = new Schema({
  yearFrom: {
    type: Number,
    match: /\d{4}/
  },
  yearTo: {
    type: Number,
    match: /\d{4}/
  },
  nameOfCompany: String,
  jobTitle: String,
  employmentLocation: String
});

var professionalAreasSchema = new Schema({
  profArea: {
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
  }
});

var profileSchema = new Schema(
  {
    about: String,
    gender: {
      type: String,
      enum: ["female", "male", "other", "prefer not to say"]
    },
    jobTitle: String,
    city: String,
    country: String,
    professionalAreas: [professionalAreasSchema],
    contactDetails: [contactDetailSchema],
    qualifications: [qualificationSchema],
    employments: [employmentSchema],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  {
    timestamps: true
  }
);

var userSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    profile: [profileSchema]
  },
  {
    timestamps: true
  }
);

userSchema.set("toJSON", {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) return next();
  // password has been modified, so let's hash it!
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model("User", userSchema);
