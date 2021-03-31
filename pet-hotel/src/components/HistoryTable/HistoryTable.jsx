import axios from 'axios';
import HistoryTableItem from './HistoryTableItem';

function HistoryTable() {
  return (
    <div className="history-table">
      <table>
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
    </div>
  );
}

export default HistoryTable;
