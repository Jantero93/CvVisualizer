import axios, { AxiosResponse } from 'axios';

/** Types */
import { WorkExperience } from '../types/types';

const BASE_URL = '/api/workexperiences';

const getAll = async (): Promise<WorkExperience[]> => {
  const request = axios.get(BASE_URL);
  const response: AxiosResponse<WorkExperience[]> = await request;
  return response.data;
};

const postOne = async (workplace: WorkExperience): Promise<WorkExperience> => {
  const request = axios.post(BASE_URL, workplace);
  const response: AxiosResponse<WorkExperience> = await request;
  return response.data;
};

const WorkplaceService = {
  getAll,
  postOne
};

export default WorkplaceService;
