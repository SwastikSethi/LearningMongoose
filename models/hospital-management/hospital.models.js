import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
  name:{
    type:string,
    required:true,
  },
  address:{
    type:string,
    required:true,
  },
  city:{
    type:string,
    required:true,
  },
  pincode:{
    // foreign contain alphabets also
    type:string,
    required:true,
  },
  specializedIn:[
    {
      type:string,
      enum:["Cardiology", "Dental", "Dermatology", "Gynaecology", "Neurology", "Ophthalmology", "Oncology", "Orthopedics", "Psychiatry", "Radiology", "Surgery", "Urology"],
      required:true,
    }
  ],
  
}, {timestamps:true});

export const Hospital = mongoose.model("Hospital", hospitalSchema);