import {useEffect, useRef, useContext} from 'react';
import {AuthContext, updateProfile} from '../utils';

export default (selection, field) => {
  /* On first render, the selection value is empty (unless we fetch from the datastore).
  Hence calling updateProfile will clear the datastore value.
  To avoid datastore update at first render, we're using useRef */
  const firstUpdate = useRef(true);

  //create object for the field to update
  const dataToUpdate = {[field]: selection};
  console.log(dataToUpdate);

  // Get the current logged in user's uid
  const {user} = useContext(AuthContext);
  const id = user.uid;

  // Update datastore only after value of selection is changed
  //TODO: store in local state and then update all values at once, avoid repititve writes to the store
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const handleValueChange = async () => {
      await updateProfile(dataToUpdate, id);
    };
    handleValueChange();
  }, [selection]);
};
