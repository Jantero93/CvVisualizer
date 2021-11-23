import axios, { AxiosResponse } from 'axios';

/** Types */
import { Workplace } from '../types/types';

const BASE_URL = '/api/workplaces';

const getAll = async (): Promise<Workplace[]> => {
  const request = axios.get(BASE_URL);
  const response: AxiosResponse<Workplace[]> = await request;
  return response.data;
};

const postOne = async (workplace: Workplace): Promise<Workplace> => {
  const request = axios.post(BASE_URL, workplace);
  const response: AxiosResponse<Workplace> = await request;
  return response.data;
};

const WorkplaceService = {
  getAll,
  postOne
};

export default WorkplaceService;
