import { Module } from '@nestjs/common';
import { SaranController } from './saran.controller';
import { SaranService } from './saran.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SaranSchema } from './saran.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'saran', schema: SaranSchema }]),
  ],
  controllers: [SaranController],
  providers: [SaranService],
})
export class SaranModule {}
