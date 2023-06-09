import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Skill } from './skills-test.model';
import { SkillTestService } from './skills-test.service';
import { SkillTestDto } from './skills-test.dto';

@Resolver(() => Skill)
export class SkillTestResolver {
  constructor(private skillTestService: SkillTestService) {}

  @Mutation(() => Skill)
  async createSkillTest(
    @Args('createSkillTest') createSkillTest: SkillTestDto,
  ): Promise<Skill> {
    return await this.skillTestService.createSkillTest(createSkillTest);
  }

  @Query(() => Skill)
  async getSkillTest(@Args('id') id: string): Promise<Skill> {
    return await this.skillTestService.getSkillTest(id);
  }

  @Mutation(() => Skill)
  async updateSkillTest(
    @Args('updateSkill') updateTag: SkillTestDto,
    @Args('id') id: string,
  ): Promise<Skill> {
    return await this.skillTestService.updateSkillTest(updateTag, id);
  }

  @Mutation(() => Skill)
  async deleteSkillTest(@Args('id') id: string): Promise<Skill> {
    return await this.skillTestService.deleteSkillTest(id);
  }

  @Query(() => [Skill])
  async getAllSkillTest(): Promise<Skill[]> {
    return await this.skillTestService.getAllSkillTest();
  }
}
