export const getSuperheroes = /* GraphQL */ `
  query GetSuperheroes($Name: String!) {
    getSuperheroes(Name: $Name) {
      Name
      Powers
      Backstory
      __typename
    }
  }
`;
export const listSuperheroes = /* GraphQL */ `
  query ListSuperheroes(
    $filter: TableSuperheroesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuperheroes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Name
        Powers
        Backstory
        __typename
      }
      nextToken
      __typename
    }
  }
`;
