import { Injectable } from '@nestjs/common';
import { EmployeeTestDto, FilterBySkill } from './employee-Test.dto';
import { EmployeeTest, Prisma } from '@prisma/client';
import { filter } from 'rxjs';
import { Tag } from '../Tag/tag.model';
import { Skill } from '../skills-Test/skills-test.model';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmployeeTestService {
  constructor(private readonly prisma: PrismaService) {}

  async createEmployeeTest(data: EmployeeTestDto): Promise<EmployeeTest> {
    return this.prisma.employeeTest.create({
      data: {
        ...data,
        skillsTestId: {
          set: data?.skillsTestId,
        },
      },
    });
  }
  async getEmployeeTest(id: string): Promise<EmployeeTest> {
    return await this.prisma.employeeTest.findUnique({
      where: { id: id },
      include: {
        skills: true,
      },
    });
  }
  async getAllEmployeeTest(filter: FilterBySkill): Promise<EmployeeTest[]> {
    let filterQuery: Prisma.EmployeeTestWhereInput = {};
    if (filter?.skillId) {
      filterQuery = {
        ...filterQuery,
        skillsTestId: {
          hasSome: filter?.skillId,
        },
      };
    }
    const allEmployee = await this.prisma.employeeTest.findMany({
      where: {
        archived: false,
      },
      include: {
        skills: true,
      },
      orderBy: [{ Name: 'asc' }],
    });
    return allEmployee;
  }
  async deleteEmployeeTest(id: string): Promise<EmployeeTest> {
    return await this.prisma.employeeTest.update({
      where: { id },
      data: {
        archived: true,
      },
    });
  }
  async updateEmployeeTest(
    data: EmployeeTestDto,
    id: string,
  ): Promise<EmployeeTest> {
    return await this.prisma.employeeTest.update({
      where: { id: id },
      data: {
        ...data,
        skillsTestId: {
          push: data?.skillsTestId,
        },
      },
    });
  }

  async getEmployeeTestCount(): Promise<Number> {
    return await this.prisma.employeeTest.count({
      where: {
        archived: false,
      },
    });
  }

  async skillWithEmployeeCount(): Promise<Skill[]> {
    const skillWithEmployeeCount = await this.prisma.employeeTest.aggregateRaw({
      pipeline: [
        {
          $match: {
            archived: false,
          },
        },
        {
          $lookup:
            /**
             * from: The target collection.
             * localField: The local join field.
             * foreignField: The target join field.
             * as: The name for the results.
             * pipeline: Optional pipeline to run on the foreign collection.
             * let: Optional variables to use in the pipeline field stages.
             */
            {
              from: 'SkillTest',
              localField: 'skillsTestId',
              foreignField: '_id',
              as: 'Skills',
            },
        },
        {
          $unwind:
            /**
             * path: Path to the array field.
             * includeArrayIndex: Optional name for index.
             * preserveNullAndEmptyArrays: Optional
             *   toggle to unwind null and empty values.
             */
            {
              path: '$Skills',
              preserveNullAndEmptyArrays: true,
            },
        },
        {
          $match: {
            archived: false,
          },
        },
        {
          $group:
            /**
             * _id: The id of the group.
             * fieldN: The first field name.
             */
            {
              _id: {
                _id: '$Skills',
              },
              count: {
                $count: {},
              },
            },
        },
        {
          $project:
            /**
             * specifications: The fields to
             *   include or exclude.
             */
            {
              id: { $toString: '$_id._id._id' },
              Name: '$_id._id.Name',
              count: '$count',
            },
        },
        {
          $sort: {
            count: -1,
          },
        },
      ],
    });
    return skillWithEmployeeCount as unknown as Skill[];
  }
  async tagsWithEmployeeCount(): Promise<Tag[]> {
    const tagsWithEmployeeCount = await this.prisma.employeeTest.aggregateRaw({
      pipeline: [
        {
          $match: {
            archived: false,
          },
        },
        {
          $lookup:
            /**
             * from: The target collection.
             * localField: The local join field.
             * foreignField: The target join field.
             * as: The name for the results.
             * pipeline: Optional pipeline to run on the foreign collection.
             * let: Optional variables to use in the pipeline field stages.
             */
            {
              from: 'SkillTest',
              localField: 'skillsTestId',
              foreignField: '_id',
              as: 'Skill',
            },
        },
        {
          $match: {
            archived: false,
          },
        },
        {
          $lookup:
            /**
             * from: The target collection.
             * localField: The local join field.
             * foreignField: The target join field.
             * as: The name for the results.
             * pipeline: Optional pipeline to run on the foreign collection.
             * let: Optional variables to use in the pipeline field stages.
             */
            {
              from: 'Tag',
              localField: 'Skill.tagIds',
              foreignField: '_id',
              as: 'Tags',
            },
        },
        {
          $unwind:
            /**
             * path: Path to the array field.
             * includeArrayIndex: Optional name for index.
             * preserveNullAndEmptyArrays: Optional
             *   toggle to unwind null and empty values.
             */
            {
              path: '$Tags',
              preserveNullAndEmptyArrays: true,
            },
        },
        {
          $match: {
            archived: false,
          },
        },
        {
          $group:
            /**
             * _id: The id of the group.
             * fieldN: The first field name.
             */
            {
              _id: {
                TagId: '$Tags',
              },
              count: {
                $count: {},
              },
            },
        },
        {
          $project:
            /**
             * specifications: The fields to
             *   include or exclude.
             */
            {
              id: { $toString: '$_id.TagId._id' },
              Name: '$_id.TagId.Name',
              count: '$count',
            },
        },
        {
          $sort: {
            count: -1,
          },
        },
      ],
    });
    return tagsWithEmployeeCount as unknown as Tag[];
  }
}
