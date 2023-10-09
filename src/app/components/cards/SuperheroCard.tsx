import { Superhero } from '@/app/models/Superhero';

const SuperheroCard = ({ superhero }: { superhero: Superhero }) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold">{superhero.name}</h2>
        <h3 className="text-md font-semibold">{superhero.powers}</h3>
        <p className="text-gray-600">{superhero.backstory}</p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperheroCard;