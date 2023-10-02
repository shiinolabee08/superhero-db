/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSuperheroes = /* GraphQL */ `
  subscription OnCreateSuperheroes(
    $Name: String
    $Powers: String
    $Backstory: [String]
  ) {
    onCreateSuperheroes(Name: $Name, Powers: $Powers, Backstory: $Backstory) {
      Name
      Powers
      Backstory
      __typename
    }
  }
`;
export const onUpdateSuperheroes = /* GraphQL */ `
  subscription OnUpdateSuperheroes(
    $Name: String
    $Powers: String
    $Backstory: [String]
  ) {
    onUpdateSuperheroes(Name: $Name, Powers: $Powers, Backstory: $Backstory) {
      Name
      Powers
      Backstory
      __typename
    }
  }
`;
export const onDeleteSuperheroes = /* GraphQL */ `
  subscription OnDeleteSuperheroes(
    $Name: String
    $Powers: String
    $Backstory: [String]
  ) {
    onDeleteSuperheroes(Name: $Name, Powers: $Powers, Backstory: $Backstory) {
      Name
      Powers
      Backstory
      __typename
    }
  }
`;
