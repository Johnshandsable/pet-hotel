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
      <HistoryTableItem />
    </div>
  );
}

export default HistoryTable;
