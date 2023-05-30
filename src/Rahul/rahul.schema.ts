import * as mongoose from 'mongoose';
export const RahulSchema = new mongoose.Schema({
  Name: String,
  PhoneNumber: Number,
  Address: String,
  CompanyName: String,
  District: String,
  archived: Boolean,
});
