import * as mongoose from 'mongoose';
export const SaranSchema = new mongoose.Schema({
  userName: String,
  email: String,
  phone: Number,
  contactName: String,
  contactPhone: Number,
  contactEmail: String,
  commissionPercentange: Number,
  Activeform: Date,
  archived: Boolean,
  createdAT: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
SaranSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});
