import axios from 'axios';
import { useState } from 'react';

function AddPetForm({ data }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [breed, setBreed] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log('name', name);
    // console.log('color', color);
    // console.log('breed', breed);
    console.log('owner', owner);
    // console.log('submitting form');

    console.log(data);
    axios
      .post('/api/pet/add', {
        name,
        color,
        breed,
        owner,
      })
      .then((res) => {
        console.log('a response occurred', res);
      })
      .catch((err) => {
        console.error('an error occurred', err);
      });
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
      <select
        onChange={(evt) => {
          setOwner(evt.target.value);
        }}
      >
        {data.map((owner, i) => {
          return (
            <option value={owner.owner_name} key={i}>
              {owner.owner_name}
            </option>
          );
        })}
      </select>
      <button>Submit</button>
    </form>
  );
}

export default AddPetForm;
