export type Location = {
  latitude: number;
  longitude: number;
};

/***
 * 
 */
export type Person = {
  id: string
  username: string;
  name?: string;
  age?: number;
  education: string;
  workplace: Workplace;
};

export type WorkExperience = {
  id: string
  username: string, 
  beginTime: string;
  endTime?: string;
  title: string;
  /**  */
  typeOfWork?: string;
  workplace: Workplace;
};

export type Workplace = {
  id: string
  description?: string;
  employees?: number;
  location: Location;
  name: string;
};

