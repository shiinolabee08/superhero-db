import { Superhero } from '@/app/models/Superhero';
import {  useState } from 'react';

const SuperheroEditCard = ({ superhero }: { superhero: Superhero }) => {

  const [name, setName] = useState(superhero.name);
  const [powers, setPowers] = useState(superhero.powers);
  const [backstory, setBackstory] = useState(superhero.backstory);

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handlePowerChange = (e: any) => {
    setPowers(e.target.value);
  };

  const handleBackstoryChange = (e: any) => {
    setBackstory(e.target.value);
  }

  const handleSubmit = () => {
    // Handle the form submission to update superhero details
    // You can send a request to your server or update state here
    console.log(`Updating superhero details: ${name}, ${powers}`);
  };

  if(!superhero) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Edit Superhero Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-lg"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="power" className="block text-gray-600 font-semibold mb-2">
            Powers:
          </label>
          <input
            type="text"
            id="power"
            className="w-full p-2 border rounded-lg"
            value={powers}
            onChange={handlePowerChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="backstory" className="block text-gray-600 font-semibold mb-2">
            Backstory:
          </label>
          <textarea
            id="backstory"
            className="w-full p-2 border rounded-lg"
            value={backstory}
            onChange={handleBackstoryChange}></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );

}

export default SuperheroEditCard;