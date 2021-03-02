import {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {updateProfile} from '../utils/updateProfile';

export default (selection, field) => {
  /* On first render, the selection value is empty (unless we fetch from the datastore).
  Hence calling updateProfile will clear the datastore value.
  To avoid datastore update at first render, we're using useRef */
  const firstUpdate = useRef(true);
  const {currentUserProfile} = useSelector((state) => state.profile);
  const dataToUpdate = {[field]: selection};
  console.log('Using value change to update: ', dataToUpdate);
  const handleValueChange = async () => {
    console.log('Handling actual value change');
    await updateProfile(dataToUpdate, currentUserProfile.id);
  }; //create object for the field to update

  // Update datastore only after value of selection is changed
  //TODO: store in local state and then update all values at once, avoid repititve writes to the store
  useEffect(() => {
    if (firstUpdate.current) {
      console.log('First Render');
      firstUpdate.current = false;
      return;
    }
    handleValueChange();
  }, [selection]);
};
