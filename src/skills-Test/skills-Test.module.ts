import { Module } from '@nestjs/common';
import { SkillTestService } from './skills-test.service';
import { SkillTestResolver } from './skills-test.resolver';

@Module({
  providers: [SkillTestResolver, SkillTestService],
})
export class SkillTestModule {}
