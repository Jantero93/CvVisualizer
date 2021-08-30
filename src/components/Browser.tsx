import React from 'react';
import { WorkExperience, Workplace } from '../types/types';

interface Props {
  data: Workplace[] | WorkExperience[];
  columns: string[];
}

export const Browser: React.FC<Props> = ({ data, columns }: Props) => {
  return <div>{(data[0] as Workplace).location + columns[0]}</div>;
};
