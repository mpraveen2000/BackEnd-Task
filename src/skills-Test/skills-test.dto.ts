import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SkillTestDto {
  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  Name: string;

  @Field(() => [String], { nullable: true })
  @IsString({ each: true })
  tagIds: string[];
}
