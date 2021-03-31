import axios from 'axios';
import HistoryTableItem from './HistoryTableItem';

function HistoryTable() {
  axios
    .get('/api/pets/all')
    .then((res) => {
      console.log('a response occurred', res);
    })
    .catch((err) => {
      console.error('an error occurred', err);
    });

  return (
    <div className="history-table">
      <h4>History</h4>
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
