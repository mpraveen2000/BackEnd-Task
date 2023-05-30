import { Module } from '@nestjs/common';
import { EmployeeTestResolver } from './employee-Test.resolver';
import { EmployeeTestService } from './employee-Test.service';

@Module({
  providers: [EmployeeTestResolver, EmployeeTestService],
})
export class EmployeeTestModule {}
