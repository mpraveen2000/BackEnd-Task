import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Skill } from 'src/skills-Test/skills-test.model';

@InputType()
export class EmployeeTestDto {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  Name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEmail()
  Email?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsPhoneNumber()
  Phone?: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDateString()
  doj?: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDateString()
  dob?: Date;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsString({ each: true })
  skillsTestId?: string[];
}

@InputType()
export class FilterBySkill {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  skillId?: string;
}
