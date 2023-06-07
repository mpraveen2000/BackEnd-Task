import {
  Args,
  Float,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { EmployeeTest } from './employee-Test.model';
import { EmployeeTestService } from './employee-Test.service';
import { EmployeeTestDto, FilterBySkill } from './employee-Test.dto';
import { Tag } from '../Tag/tag.model';
import { Skill } from '../skills-Test/skills-test.model';

@Resolver(() => EmployeeTest)
export class EmployeeTestResolver {
  constructor(private readonly employeeTestService: EmployeeTestService) {}

  @Mutation(() => EmployeeTest)
  async createEmployeeTest(
    @Args('createEmployee') createEmployee: EmployeeTestDto,
  ): Promise<EmployeeTest> {
    return await this.employeeTestService.createEmployeeTest(createEmployee);
  }
  @Query(() => EmployeeTest)
  async getEmployeeTest(@Args('id') id: string): Promise<EmployeeTest> {
    return await this.employeeTestService.getEmployeeTest(id);
  }

  @Mutation(() => EmployeeTest)
  async updateEmployeeTest(
    @Args('updateEmployee') updateEmployee: EmployeeTestDto,
    @Args('id') id: string,
  ): Promise<EmployeeTest> {
    return await this.employeeTestService.updateEmployeeTest(
      updateEmployee,
      id,
    );
  }

  @Query(() => [EmployeeTest])
  async getAllEmployeeTest(
    @Args('filter', { nullable: true }) filter: FilterBySkill,
  ): Promise<EmployeeTest[]> {
    console.log(filter);
    return await this.employeeTestService.getAllEmployeeTest(filter);
  }
  @Mutation(() => EmployeeTest)
  async deleteEmployeeTest(@Args('id') id: string): Promise<EmployeeTest> {
    return await this.employeeTestService.deleteEmployeeTest(id);
  }

  @ResolveField(() => Float)
  async age(@Parent() employee: EmployeeTest): Promise<number> {
    const dob = employee.dob;
    const currentDate = new Date();
    const birthDate = new Date(dob);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  }

  @Query(() => Float)
  async getEmployeeTestCount(): Promise<Number> {
    const count = await this.employeeTestService.getEmployeeTestCount();
    return count;
  }

  @Query(() => [Skill])
  async skillWithEmployeeCount(): Promise<Skill[]> {
    return await this.employeeTestService.skillWithEmployeeCount();
  }
  @Query(() => [Tag])
  async tagsWithEmployeeCount(): Promise<Tag[]> {
    return await this.employeeTestService.tagsWithEmployeeCount();
  }
}
