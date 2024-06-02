import mongoose from "mongoose"



const doctorSchema = new mongoose.Schema({
  name:{
    type:string,
    required: true,
  },
  salary:{
    type: Number,
    required: true,
  },
  qualification:{
    type: string,
    required: true,
  },
  specialization:{
    type:string,
    required: true,
  },
  experienceInYears:{
    type: Number,
    default : 0,
  },
  worksInHospitals:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    }
  ]
  
}, {timpestamps: true});

export const Doctor = mongoose.model("Doctor", doctorSchema);