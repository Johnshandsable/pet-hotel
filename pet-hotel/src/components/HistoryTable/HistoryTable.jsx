import HistoryTableItem from './HistoryTableItem';

function HistoryTable({ data }) {
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
        {data.map((item, index) => {
          return <HistoryTableItem item={item} key={index} />;
        })}
      </tbody>
    </table>
  );
}

export default HistoryTable;
