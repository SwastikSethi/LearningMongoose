import mongoose from "mongoose"

const patientSchema = new mongooose.Schema({
  name:{
    type: string,
    required: true,
  },
  dignosedWith:{
    type: string,
    required: true,
  },
  address:{
    type: string,
    required: true,
  },
  age:{
    type: Number,
    required: true,
  },
  BloodGroup:{
    type: string,
    required: true,
  },
  gender:{
    type:string,
    enum: ["Male", "Female"],
    required: true
  },
  contact:{
    type: Number,
    required: true,
  },
  admittedIn:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  }
}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);