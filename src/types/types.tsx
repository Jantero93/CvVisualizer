export type Location = {
  latitude: number;
  longitude: number;
};

export type Person = {
  id?: string;
  username: string;
  name?: string;
  age?: number;
  education: string;
  workExperience?: WorkExperience[];
};

export type WorkExperience = {
  id?: string;
  username: string;
  beginTime: string;
  endTime?: string;
  description?: string;
  title: string;
  workplace: Workplace;
};

export type Workplace = {
  id?: string;
  name: string;
  description?: string;
  location: Location;
  size?: string;
};

export type MapView = {
  location: Location;
  zoom: number;
};
