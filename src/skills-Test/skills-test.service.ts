import { Injectable } from '@nestjs/common';
import { SkillTestDto } from './skills-test.dto';
import { Skill } from './skills-test.model';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SkillTestService {
  findMany(arg0: { where: { archived: boolean }; include: { tags: boolean } }) {
    throw new Error('Method not implemented.');
  }
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
        tagIds: {
          set: data?.tagIds,
        },
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
