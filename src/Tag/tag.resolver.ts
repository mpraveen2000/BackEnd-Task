import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Tag } from './tag.model';
import { TagDto } from './tag.dto';
import { TagService } from './tag.service';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private tagService: TagService) {}
  @Mutation(() => Tag)
  async createTag(@Args('createTag') createTag: TagDto): Promise<Tag> {
    return await this.tagService.createTag(createTag);
  }
  @Query(() => Tag)
  async getTag(@Args('id') id: string): Promise<Tag> {
    return await this.tagService.getTag(id);
  }

  @Query(() => [Tag])
  async getAllTags(): Promise<Tag[]> {
    return await this.tagService.getAllTags();
  }

  @Mutation(() => Tag)
  async updateTag(
    @Args('updateTag') updateTag: TagDto,
    @Args('id') id: string,
  ): Promise<Tag> {
    return await this.tagService.updateTag(updateTag, id);
  }
  @Mutation(() => Tag)
  async deleteTag(@Args('id') id: string): Promise<Tag> {
    return await this.tagService.deleteTag(id);
  }
}
