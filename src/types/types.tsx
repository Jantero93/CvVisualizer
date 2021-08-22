export type Location = {
  latitude: number;
  longitude: number;
};

/***
 * 
 */
export type Person = {
  username: string;
  name?: string;
  age?: number;
  education: string;
  workplace: Workplace;
};

export type WorkExperience = {
  username: string, 
  beginTime: string;
  endTime?: string;
  title: string;
  /**  */
  typeOfWork?: string;
  workplace: Workplace;
};

export type Workplace = {
  description?: string;
  employees?: number;
  location: Location;
  name: string;
};

