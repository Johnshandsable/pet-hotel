function AddPetForm() {
  return (
    <form>
      <h4>Add Pet</h4>
      <input type="text">Pet Name</input>
      <input type="text">Pet Color</input>
      <input type="text">Pet Breed</input>
      <select>{/* Map some options here */}</select>
      <button>Submit</button>
    </form>
  );
}

export default AddPetForm;
