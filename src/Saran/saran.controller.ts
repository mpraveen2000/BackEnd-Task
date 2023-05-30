import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common/decorators';
import { SaranService } from './saran.service';
import { SaranDTO } from './saran.dto';
import { Saran } from './saran.interface';
@Controller('Saran')
export class SaranController {
  constructor(private saranservice: SaranService) {}

  @Post('/createSaran')
  async createSaran(@Body('data') data: SaranDTO) {
    console.log(data);
    return await this.saranservice.createSaran(data);
  }
  @Delete('/deleteSaran/:id')
  async deletesaran(@Param('id') id: string): Promise<Saran> {
    return await this.saranservice.deletesaran(id);
  }
  @Put('updateOneSaran/:id')
  async updateOnesaran(
    @Param('id') id: string,
    @Body('body') data: SaranDTO,
  ): Promise<Saran> {
    return await this.saranservice.updateOneSaran(id, data);
  }
  @Get('/getAllSaran')
  async getAllSaran(): Promise<Saran[]> {
    return await this.saranservice.getAllSaran();
  }
}
