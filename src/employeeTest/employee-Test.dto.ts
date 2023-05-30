import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Skill } from 'src/skills-Test/skills-test.model';
@InputType()
export class EmployeeTestDto {
  @Field(() => String, { nullable: true })
  Name?: string;

  @Field(() => String, { nullable: true })
  Email?: string;

  @Field(() => String, { nullable: true })
  Phone?: string;

  @Field(() => Date, { nullable: true })
  doj?: Date;

  @Field(() => Date, { nullable: true })
  dob?: Date;

  @Field(() => [String], { nullable: true })
  skillsTestId?: string[];
}
@InputType()
export class FilterBySkill {
  @Field(() => String, { nullable: true })
  skillId?: string;
}
