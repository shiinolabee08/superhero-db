import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { getSuperheroes } from '../../../graphql/queries';

type Superhero = {
  name: String;
  powers: String | String[];
  backstory: String;
}

const SuperheroEditCard = ({ name }: { name: string }) => {
  const [superheroDetail, setSuperheroDetail] = useState<Superhero|null>(null);

  useEffect(() => {
    async function fetchSuperhero() {
      try {
        const response = await API.graphql(graphqlOperation(getSuperheroes, { name })) as any;

        setSuperheroDetail(response.data.getSuperheroes);
      } catch(error) {
        console.error('Error fetching superhero details: ', error);
      }
    }

    fetchSuperhero();
  }, [name]);

  if(!superheroDetail) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>{superheroDetail.name}</h1>
      <h3>{superheroDetail.powers}</h3>
      <p>{superheroDetail.backstory}</p>
    </div>
  )

}

export default SuperheroEditCard;