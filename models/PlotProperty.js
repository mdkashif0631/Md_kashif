import { Schema, model } from 'mongoose';

const plotPropertySchema = new Schema({
  Id: String,
  Project_type: String,

  Project_File_Name: String,
  Project_Name: String,
  Developer_Name: String,
  Developer_Logo: String,
  Logoimg: String,
  Description: String,
  Developer_Rera_No: String,
  Our_Rera_Number: String,

  State: String,
  City: String,
  Location: String,
  Localities: String,
  Pin_Code: String,

  Super_Area_Plot: String,
  Price_per_sq_Plot: String,
  Total_Price_Plot: String,
  Floor_Plan_Plot: String,

  Master_Plan: String,
  Location_Map: String,
  Google_Map: String,
  End_price: String,
  Start_price: String,

  Image: String,
  Image01: String,
  Image02: String,
  Image03: String,
  Image04: String,
  Main_Image: String,

  Built: String,
  Garages: String,
  Mode: String,
  Possession: String,
  Number_of_unit: String,

  Security: String,
  Link: String,
  Amenities: []
}, { timestamps: true });

const PlotProperty = model('PlotProperty', plotPropertySchema);
export default PlotProperty;
