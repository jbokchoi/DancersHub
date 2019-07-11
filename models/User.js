var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

var userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String
    // memberProfile: MemberProfileSchema
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

// var MemberProfileSchema = new mongoose.Schema(
//   {
//     about: String,
//     professionalAreas: {
//       type: String,
//       enum: [
//         "Dancer",
//         "Choreographer",
//         "Movement Director",
//         "Mass Movement",
//         "Dance Teacher",
//         "Dance Lecturer",
//         "Somatic Practitioner",
//         "Healthcare Practitioner",
//         "Dance Scientist",
//         "Dance Critic",
//         "Dance Admin",
//         "Dance Management"
//       ]
//     },
//     gender: {
//       type: String,
//       enum: ["female", "male", "other", "prefer not to say"]
//     },
//     jobTitle: String,
//     location: {
//       city: String,
//       country: String
//     },
//     contactDetails: [{ type: Schema.Types.ObjectId, ref: "ContactDetail" }],
//     qualifications: [QualificationSchema],
//     employment: [EmploymentSchema],
//     followedMembers: [{ type: Schema.Types.ObjectId, ref: "MemberProfile" }],
//     followedCompanies: [
//       { type: Schema.Types.ObjectId, ref: "CompanyMemberProfile" }
//     ]
//   },
//   {
//     timestamps: true
//   }
// );

// var QualificationSchema = new mongoose.Schema({
//   schoolOrAcademicProgramme: String,
//   gradYear: Number,
//   location: String
// });

// var EmploymentSchema = new mongoose.Schema({
//   yearFrom: Number,
//   yearTo: Number,
//   nameOfCompany: String,
//   jobTitle: String,
//   location: String
// });

module.exports = mongoose.model("User", userSchema);
