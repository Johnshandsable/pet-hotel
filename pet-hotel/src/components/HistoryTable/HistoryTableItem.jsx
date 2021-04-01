function HistoryTableItem({ item }) {
  // <tr>
  //   <th>Owner</th>
  //   <th>Pet</th>
  //   <th>Breed</th>
  //   <th>Color</th>
  //   <th>Checked In</th>
  //   <th>Actions</th>
  // </tr>
  console.log('item', item);

  return (
    <tr>
      <td>Carl</td>
      <td>Snuffles</td>
      <td>Golden Retriever</td>
      <td>Yellow</td>
      <td>Date goes here...</td>
      <td>Delete | Check In</td>
    </tr>
  );
}

export default HistoryTableItem;
