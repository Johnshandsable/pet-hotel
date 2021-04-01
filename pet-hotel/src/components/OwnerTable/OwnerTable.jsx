import OwnerTableItem from '../OwnerTable/OwnerTableItem';

function OwnerTable({ ownersTable }) {
  console.log('owner table', owners);

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
        {ownersTable.map((owner, index) => {
          return <OwnerTableItem key={index} owner={owner} />;
        })}
      </tbody>
    </table>
  );
}

export default OwnerTable;
