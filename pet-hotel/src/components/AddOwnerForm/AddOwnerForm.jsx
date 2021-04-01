function AddOwnerForm() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submitting');
  };

  return (
    <form>
      <input type="text" placeholder="owner name" />
      <button>Submit</button>
    </form>
  );
}

export default AddOwnerForm;
