import axios, { AxiosResponse } from "axios";

/** Types */
import { Workplace } from "../types/types";

const BASE_URL = '/api/workplaces';

const getAll =  async (): Promise<Workplace[]> => {
    const request = axios.get(BASE_URL);
    const response: AxiosResponse<Workplace[]> = await request;
    return response.data;
}

const WorkplaceService = {
  getAll
}

export default WorkplaceService;