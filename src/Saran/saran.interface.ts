import { Document } from 'mongoose';
export interface Saran extends Document {
  userName: string;
  email: string;
  phone: number;
  contactName: string;
  contactPhone: number;
  contactEmail: string;
  commissionPercentange: number;
  Activeform: Date;
  archived: Boolean;
}
