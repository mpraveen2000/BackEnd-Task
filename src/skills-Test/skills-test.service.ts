import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { SkillTestDto } from './skills-test.dto';
import { Skill } from './skills-test.model';

@Injectable()
export class SkillTestService {
  constructor(private readonly prisma: PrismaService) {}

  async createSkillTest(data: SkillTestDto): Promise<Skill> {
    return this.prisma.skillTest.create({
      data: {
        ...data,
        tagIds: {
          set: data?.tagIds,
        },
      },
    });
  }
  async getSkillTest(id: string): Promise<Skill> {
    return await this.prisma.skillTest.findUnique({
      where: { id: id },
      include: {
        tags: true,
      },
    });
  }

  async getAllSkillTest(): Promise<Skill[]> {
    const skills = (await this.prisma.skillTest.findMany({
      where: {
        archived: false,
      },
      include: {
        tags: true,
      },

      orderBy: [{ Name: 'asc' }, { id: 'asc' }],
    })) as Skill[];
    return skills;
  }

  async updateSkillTest(data: SkillTestDto, id: string): Promise<Skill> {
    return await this.prisma.skillTest.update({
      where: { id: id },
      data: {
        Name: data?.Name,
      },
    });
  }
  async deleteSkillTest(id: string): Promise<Skill> {
    return await this.prisma.skillTest.update({
      where: { id },
      data: {
        archived: true,
      },
    });
  }
}
