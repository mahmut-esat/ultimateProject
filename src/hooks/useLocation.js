import {useEffect, useState} from 'react';
import { Location } from 'react-native-location';

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const {granted} = await Location.requestPermissionsAsync();
      if (!granted) return;

      const {
        coords: {latitude, longitude},
      } = Location.getLastKnownPositionAsync();
      setLocation({latitude, longitude});
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return location;
};

export default useLocation;
