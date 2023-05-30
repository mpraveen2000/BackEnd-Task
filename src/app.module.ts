import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaranModule } from './Saran/saran.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQlModule } from './graphql/graphql.module';
import { RahulModule } from './Rahul/rahul.module';
import { PrismaModule } from './prisma';
import { SkillTestModule } from './skills-Test/skills-Test.module';
import { Tag } from './Tag/tag.model';
import { EmployeeTest } from './employeeTest/employee-Test.model';
import { TagModule } from './Tag/tag.module';
import { EmployeeTestModule } from './employeeTest/employee-Test.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Praveen:9080109022@cluster0.0c9qbta.mongodb.net/?retryWrites=true&w=majority',
    ),
    PrismaModule,
    GraphQlModule,
    RahulModule,
    SaranModule,
    SkillTestModule,
    TagModule,
    EmployeeTestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
