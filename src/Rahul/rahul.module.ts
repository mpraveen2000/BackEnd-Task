import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RahulPrismaService } from './rahul-prisma.service';
import { RahulPrismaResolver } from './rahul.resolver';
import { RahulSchema } from './rahul.schema';

@Module({
  providers: [RahulPrismaResolver, RahulPrismaService],
})
export class RahulModule {}
