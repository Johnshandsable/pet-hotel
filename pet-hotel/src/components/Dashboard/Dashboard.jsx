import axios from 'axios';
import { useState, useEffect } from 'react';

import AddPetForm from '../AddPetForm/AddPetForm';
import HistoryTable from '../HistoryTable/HistoryTable';

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('/api/pets/all')
      .then((res) => {
        // pet_id, owner_id, name, breed, color
        console.log('a response occurred', res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error('an error occurred', err);
      });
  }, []);

  return (
    <div>
      <h3>This is a dashboard</h3>
      <AddPetForm data={data} setData={setData} />
      <HistoryTable data={data} />
    </div>
  );
}

export default Dashboard;
