/** Map related */
export type MapView = {
  location: Location;
  zoom: number;
};

export type Location = {
  latitude: number;
  longitude: number;
};

// workExperience array or array of refs?
// Should person and website user be own types?

/** User (login etc.) / Person-related */
export type Person = {
  id?: string;
  username: string;
  name: string;
  age?: number;
  education: string;
  workExperience?: WorkExperience[];
};

/** User's or companies work experiences */
export type WorkExperience = {
  id?: string;
  username: string;
  beginTime: string;
  endTime?: string;
  description?: string;
  title: string;
  workplaceRef: string;
};

/** Working places */
export type Workplace = {
  id?: string;
  address: string;
  name: string;
  description?: string;
  location: Location;
  size?: string;
  workExperiences?: WorkExperience[];
};
