import { useState } from 'react';

function AddPetForm() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('name', name);
    console.log('color', color);
    console.log('breed', breed);
    console.log('submitting form');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Pet</h4>
      <input
        type="text"
        placeholder="Pet Name"
        value={name}
        onChange={(evt) => {
          setName(evt.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Pet Color"
        value={color}
        onChange={(evt) => {
          setColor(evt.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Pet Breed"
        value={breed}
        onChange={(evt) => {
          setBreed(evt.target.value);
        }}
      />
      <select>
        <option value="Carl">Carl</option>
      </select>
      <button>Submit</button>
    </form>
  );
}

export default AddPetForm;
