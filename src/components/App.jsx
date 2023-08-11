import React from 'react';
import { Profile } from './user/Profile';
import { Statistics } from './stats/Statistics';
import { FriendList } from './friends/FriendList';
import data from './stats/data.json';
import friends from './friends/friends.json';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
