import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class SkillTestDto {
  @Field({ nullable: true })
  Name: string;

  @Field(() => [String], { nullable: true })
  tagIds: string[];
}
