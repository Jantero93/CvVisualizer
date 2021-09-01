import axios from 'axios';
import { Location } from '../types/types';
import { GeocodeResult } from './Types';

import { GEO_APIKEY } from '../config';

export const getLocation = async (address: string): Promise<GeocodeResult> => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=[ADDRESS]&region=fi&key=${GEO_APIKEY}`;

  const response: any = await axios.get(url.replace('[ADDRESS]', address));

  const { lat, lng } = response?.data?.results[0]?.geometry?.location || 0;
  const longName = response?.data?.results[0]?.formatted_address;

  return {
    location: { latitude: lat, longitude: lng },
    status: response.data.status,
    longName: longName || ''
  };
};
