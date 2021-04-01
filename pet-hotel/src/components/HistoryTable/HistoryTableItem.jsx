function HistoryTableItem({ item }) {
  // breed: "Hamster"​
  // checked_date: null
  // checked_in: true
  // color: "Brown"
  // id: 2
  // owner_id: 1
  // owner_name: "John B"
  // pet_name: "Snuffy"

  return (
    <tr>
      <td>{item.owner_name}</td>
      <td>{item.pet_name}</td>
      <td>{item.breed}</td>
      <td>{item.color}</td>
      <td>{item.checked_date ? item.checked_date : 'None'}</td>
      <td>Delete | Check In</td>
    </tr>
  );
}

export default HistoryTableItem;
