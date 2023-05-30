import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { RahulPrismaService } from './rahul-prisma.service';
import { RahulDetailDto } from './rahul.dto';
import { Rahul } from './rahul.model';

@Resolver(() => Rahul)
export class RahulPrismaResolver {
  constructor(private rahulPrismaService: RahulPrismaService) {}

  @Mutation(() => Rahul)
  async createEmployeePrisma(
    @Args('createRahul') createRahul: RahulDetailDto,
  ): Promise<Rahul> {
    console.log(createRahul, 'wiefb');
    return await this.rahulPrismaService.createRahulPrisma(createRahul);
  }

  @Query(() => [Rahul])
  async getAllPrismaRahul(): Promise<Rahul[]> {
    const Rahul = await this.rahulPrismaService.getAllPrismaRahul();
    return Rahul;
  }

  @Mutation(() => Rahul)
  async updatePrismaRahul(
    @Args('id') id: string,
    @Args('updateData') updateData: RahulDetailDto,
  ): Promise<Rahul> {
    const updatedRahul = await this.rahulPrismaService.updatePrismaRahul(
      id,
      updateData,
    );
    return updatedRahul;
  }

  @Mutation(() => Boolean) // Return type changed to Boolean
  async deletePrismaRahul(@Args('id') id: string): Promise<boolean> {
    try {
      await this.rahulPrismaService.deletePrismaRahul(id);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  @ResolveField(() => String) // Return type changed to Boolean
  async newStatus(@Parent() data: Rahul): Promise<string> {
    return `${data?.Name} ${data?.CompanyName}`;
  }
}
