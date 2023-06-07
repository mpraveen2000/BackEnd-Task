const { GraphQLDefinitionsFactory } = require('@nestjs/graphql');
const { join } = require('path');

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['src/*.gql'],
  path: join('D:/Front-end/graphql.ts'),
  outputAs: 'class',
  watch: false,
  skipResolverArgs: true,
});
