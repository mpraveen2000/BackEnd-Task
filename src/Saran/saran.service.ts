import { Injectable } from '@nestjs/common';
import { Saran } from './saran.interface';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SaranDTO } from './saran.dto';

@Injectable()
export class SaranService {
  constructor(@InjectModel('saran') private saranModel: Model<Saran>) {}
  async createSaran(data: SaranDTO): Promise<Saran> {
    console.log(data);
    const saran = await this.saranModel.create({
      ...data,
      archived: false,
    });
    return saran;
  }
  async deletesaran(id: any): Promise<Saran> {
    return await this.saranModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { archived: true },
    );
  }
  async updateOneSaran(id: string, data: SaranDTO): Promise<Saran> {
    return await this.saranModel.findByIdAndUpdate(id, data, {
      new: true,
    });
  }
  async getAllSaran(): Promise<Saran[]> {
    return await this.saranModel.find({ archived: false }).exec();
  }
}
