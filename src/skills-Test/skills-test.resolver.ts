import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Skill } from './skills-test.model';
import { SkillTestService } from './skills-test.service';
import { SkillTestDto } from './skills-test.dto';

@Resolver(() => Skill)
export class SkilTestResolver {
  constructor(private SkillTestService: SkillTestService) {}

  @Mutation(() => Skill)
  async createSkillTest(
    @Args('createskilltest') createskilltest: SkillTestDto,
  ): Promise<Skill> {
    return await this.SkillTestService.createSkillTest(createskilltest);
  }
  @Query(() => Skill)
  async getSkillTest(@Args('id') id: string): Promise<Skill> {
    return await this.SkillTestService.getSkillTest(id);
  }

  @Mutation(() => Skill)
  async updateSkillTest(
    @Args('updateSkill') updateTag: SkillTestDto,
    @Args('id') id: string,
  ): Promise<Skill> {
    return await this.SkillTestService.updateSkillTest(updateTag, id);
  }
  @Mutation(() => Skill)
  async deleteSkillTest(@Args('id') id: string): Promise<Skill> {
    return await this.SkillTestService.deleteSkillTest(id);
  }
}
