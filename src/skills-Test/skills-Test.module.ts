import { Module } from '@nestjs/common';
import { SkillTestService } from './skills-test.service';
import { SkilTestResolver } from './skills-test.resolver';

@Module({
  providers: [SkilTestResolver, SkillTestService],
})
export class SkillTestModule {}
