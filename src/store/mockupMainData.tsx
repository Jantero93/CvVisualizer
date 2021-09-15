/** MainDataState */
import { MainDataState } from './reducers/mainDataReducer';

export const TestMainStateData: MainDataState = {
  persons: [
    {
      id: '1',
      education: 'education',
      username: 'username',
      name: 'Mathew',
      workExperience: [
        {
          id: '6',
          title: 'lääkäri',
          username: 'pentti123',
          beginTime: new Date().toISOString(),
          workplaceRef: 'salainen id'
        },
        {
          id: '7',
          title: 'pankkiiri',
          username: 'pentti123',
          beginTime: new Date().toISOString(),
          workplaceRef: '123'
        }
      ]
    },
    {
      id: '2',
      education: 'steel worker',
      username: 'username2',

      name: 'Toby',
      workExperience: [
        {
          id: '8',
          title: 'johtaja',
          username: 'pentti123',
          beginTime: new Date().toISOString(),
          workplaceRef: 'joku id'
        },
        {
          title: 'raksamestastari',
          username: 'pentti123',
          beginTime: new Date().toISOString(),
          workplaceRef: '554561'
        }
      ]
    },
    {
      id: '3',
      education: 'education',
      username: 'username',
      name: 'Mathew',
      workExperience: [
        {
          id: '9',
          beginTime: new Date().toISOString(),
          title: 'reindeer master',
          username: 'no user name',
          workplaceRef: '45612'
        }
      ]
    }
  ],
  workplaces: [
    {
      location: { latitude: 61.5, longitude: 23.79 },
      name: 'asd',
      id: '1',
      address: 'Tie street 33',
      workExperiences: [
        {
          beginTime: new Date().toISOString(),
          title: 'reindeer master',
          username: 'no user name',
          workplaceRef: '1'
        }
      ]
    },
    {
      location: { latitude: 61.4, longitude: 23.5 },
      name: 'ad',
      id: '2',
      address: 'cityStreet 23',
      workExperiences: [
        {
          beginTime: new Date().toISOString(),
          title: 'reindeer master',
          username: 'no user name',
          workplaceRef: '2'
        }
      ]
    },
    {
      location: { latitude: 60.5, longitude: 23.79 },
      name: 'asd',
      id: '3',
      address: 'Tie street 33',
      workExperiences: [
        {
          beginTime: new Date().toISOString(),
          title: 'reindeer master',
          username: 'no user name',
          workplaceRef: '3'
        }
      ]
    }
  ]
};
