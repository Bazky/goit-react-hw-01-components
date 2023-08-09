import React from 'react';
import { Profile } from './user/Profile';
import { Statistics } from './stats/Statistics';
import data from './stats/data.json';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="UPLOAD STATS" stats={data} />
    </>
  );
};
