import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Rahul {
  @Field()
  id?: string;

  @Field({ nullable: true })
  Name?: string;

  @Field({ nullable: true })
  PhoneNumber?: number;

  @Field({ nullable: true })
  Address?: string;

  @Field({ nullable: true })
  District?: string;

  @Field({ nullable: true })
  CompanyName?: string;

  @Field({ nullable: true })
  newStatus?: string;
}
