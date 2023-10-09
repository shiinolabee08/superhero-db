import { API, graphqlOperation } from 'aws-amplify';
import { getSuperheroes } from '../src/graphql/queries';

describe('getSuperheroes resolver', () => {
  it('fetches all superheroes', async() => {
    const response = await API.graphql(graphqlOperation(getSuperheroes));

    expect(response.data.getSuperheroes).toEqual({ getSuperheroes });
  });
});

