import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Skill } from 'src/skills-Test/skills-test.model';
import { Tag } from 'src/Tag/tag.model';

@ObjectType()
export class EmployeeTest {
  @Field()
  id: string;

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

  @Field(() => Number, { nullable: true })
  age?: number;

  @Field(() => [Skill], { nullable: true })
  skills?: Skill[];
}
