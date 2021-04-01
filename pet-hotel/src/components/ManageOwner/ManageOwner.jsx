import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddOwnerForm from '../AddOwnerForm/AddOwnerForm';
import OwnerTable from '../OwnerTable/OwnerTableItem';

function ManageOwner() {
  const dispatch = useDispatch();
  const owners = useSelector((store) => store.ownerReducer);

  const fetchOwners = () => {
    dispatch({
      type: 'GET_OWNERS',
    });
  };

  useEffect(() => {
    fetchOwners();
  }, []);

  console.log('manageowner', owners);

  return (
    <>
      <AddOwnerForm />
      <OwnerTable ownersTable={owners} />
    </>
  );
}

export default ManageOwner;
