import HistoryTableItem from './HistoryTableItem';

function HistoryTable() {
  return (
    <table className="history-table">
      <thead>
        <tr>
          <th>Owner</th>
          <th>Pet</th>
          <th>Breed</th>
          <th>Color</th>
          <th>Checked In</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <HistoryTableItem />
      </tbody>
    </table>
  );
}

export default HistoryTable;
