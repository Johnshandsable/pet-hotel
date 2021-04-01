import OwnerTableItem from '../OwnerTable/OwnerTableItem';

function OwnerTable({ owners }) {
  return (
    <table className="history-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Number of Pets</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <OwnerTableItem />
      </tbody>
    </table>
  );
}

export default OwnerTable;
