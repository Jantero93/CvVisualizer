/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { GeocodeResult } from './Types';

import { GEO_APIKEY } from '../config';

export const getLocation = async (
  address: string
): Promise<GeocodeResult[]> => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=[ADDRESS]&components=country:FI&key=${GEO_APIKEY}`;
  const response: any = await axios.get(url.replace('[ADDRESS]', address));

  const filtered: any[] = response?.data?.results.filter((result: any) =>
    result.types.includes('street_address')
  );

  return filtered.map((result: any) => {
    const { lat, lng } = result?.geometry?.location;
    return {
      location: {
        latitude: lat,
        longitude: lng
      },
      longName: result.formatted_address
    };
  });
};
