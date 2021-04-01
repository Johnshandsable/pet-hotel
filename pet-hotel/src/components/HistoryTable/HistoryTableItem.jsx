import axios from "axios"

function HistoryTableItem({ item }) {
  // breed: "Hamster"​
  // checked_date: null
  // checked_in: true
  // color: "Brown"
  // id: 2
  // owner_id: 1
  // owner_name: "John B"
  // pet_name: "Snuffy"

  const handleDelete = () => {
    console.log('delete pet with id', item.id)
    axios.delete(`/api/pets/delete/${item.id}`)
    .then(res => {
      console.log('deleted pet');
    })
    .catch(err => {
      console.log('err in delete pet', err)
    })
  }

  const handleCheckIn = () => {
    console.log('check in pet with id', item.id)
  }

  return (
    <tr>
      <td>{item.owner_name}</td>
      <td>{item.pet_name}</td>
      <td>{item.breed}</td>
      <td>{item.color}</td>
      <td>{item.checked_date ? item.checked_date : 'None'}</td>
      <td><button onClick={handleDelete}>Delete</button><button onClick={handleCheckIn}>Check In</button></td>
    </tr>
  );
}

export default HistoryTableItem;
