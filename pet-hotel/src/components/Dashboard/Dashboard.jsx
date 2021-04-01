import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddPetForm from '../AddPetForm/AddPetForm';
import HistoryTable from '../HistoryTable/HistoryTable';

function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.petsReducer);

  useEffect(() => {
    dispatch({
      type: 'GET_PETS',
    });
  }, []);

  return (
    <div>
      <h3>This is a dashboard</h3>
      <AddPetForm data={data} />
      <HistoryTable data={data} />
    </div>
  );
}

export default Dashboard;
