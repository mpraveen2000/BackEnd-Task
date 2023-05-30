import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rahul } from './rahul.model';
import { RahulDetailDto } from './rahul.dto';
import { PrismaService } from 'src/prisma';

@Injectable()
export class RahulPrismaService {
  constructor(private readonly prisma: PrismaService) {}

  async createRahulPrisma(data: RahulDetailDto): Promise<Rahul> {
    return await this.prisma.ravath.create({
      data,
    });
  }

  async getAllPrismaRahul(): Promise<Rahul[]> {
    const rahul = await this.prisma.ravath.findMany();
    return rahul;
  }
  async updatePrismaRahul(id: string, data: RahulDetailDto): Promise<Rahul> {
    const updatedRahul = await this.prisma.ravath.update({
      where: { id: id },
      data,
    });
    return updatedRahul;
  }
  // async deletePrismaRahul(id: any): Promise<Rahul> {
  //   const deletePrismaRahul = await this.prisma.ravath.delete({
  //     where: { id },
  //   });
  //   return deletePrismaRahul;
  // }

  async deletePrismaRahul(id: any): Promise<boolean> {
    try {
      await this.prisma.ravath.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
