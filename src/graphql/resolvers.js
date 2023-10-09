import { API, graphqlOperation } from 'aws-amplify';
import { listSuperheroes, getSuperheroes } from './queries';
import { createSuperheroes, updateSuperheroes } from './mutations';

const SuperheroResolvers = {
  Query: {
    getSuperhero: async (name) => {
      try {
        const response = await API.graphql(graphqlOperation(getSuperheroes, { name }));
        return response.data.getSuperheroes;
      } catch (error) {
        console.error('Error fetching superheroes:', error);
        throw error;
      }
    },
    getListSuperheroes: async (limit = 10, nextToken, filters = null) => {
      try {
        const response = await API.graphql(graphqlOperation(listSuperheroes, { limit, nextToken, filters }));
        return response.data.listSuperheroes.items;
      } catch (error) {
        console.error('Error fetching superheroes:', error);
        throw error;
      }
    },
  },
  Mutation: {
    createSuperhero: async (_, { input }) => {
      try {
        const response = await API.graphql(graphqlOperation(createSuperheroes, { input }));
        return response.data.createSuperheroes;
      } catch (error) {
        console.error('Error creating superhero:', error);
        throw error;
      }
    },
    updateSuperhero: async (_, { input }) => {
      try {
        const response = await API.graphql(graphqlOperation(updateSuperheroes, { input }));
        return response.data.updateSuperheroes;
      } catch (error) {
        console.error('Error creating superhero:', error);
        throw error;
      }
    },
  },
};

export default SuperheroResolvers;
