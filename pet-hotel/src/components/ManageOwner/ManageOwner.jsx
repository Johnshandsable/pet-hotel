import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddOwnerForm from '../AddOwnerForm/AddOwnerForm';
import OwnerTable from '../OwnerTable/OwnerTableItem';

function ManageOwner() {
  const dispatch = useDispatch();
  const owners = useSelector((store) => store.ownerReducer);

  useEffect(() => {
    dispatch({
      type: 'GET_OWNERS',
    });
  }, []);

  return (
    <div>
      <h3>Manage Owners here...</h3>
      <AddOwnerForm />
      <OwnerTable owners={owners} />
    </div>
  );
}

export default ManageOwner;
