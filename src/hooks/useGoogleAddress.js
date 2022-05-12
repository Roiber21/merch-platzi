import { useState, useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line prettier/prettier
const useGoogleAddress = address => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAVa_KX0YFTqoL88SczGN8qLgME4NN4AR8`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
