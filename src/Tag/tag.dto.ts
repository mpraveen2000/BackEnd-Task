import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class TagDto {
  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  Name: string;
}
