import AddPetForm from '../AddPetForm/AddPetForm';
import HistoryTable from '../HistoryTable/HistoryTable';

function Dashboard() {
  return (
    <div>
      <h3>This is a dashboard</h3>
      <AddPetForm />
      <HistoryTable />
    </div>
  );
}

export default Dashboard;
