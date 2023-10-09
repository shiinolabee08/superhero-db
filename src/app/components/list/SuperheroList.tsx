import { Superhero } from '@/app/models/Superhero';
import SuperheroCard from '../cards/SuperheroCard';

const SuperheroList = ({ superheroes }: { superheroes: Superhero[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {superheroes.map((superhero, index) => (
        <SuperheroCard key={index} superhero={superhero} />
      ))}
    </div>
  );
};

export default SuperheroList;