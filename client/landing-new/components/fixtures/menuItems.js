// react libraries
import React from 'react';

const menuArray = [
  { name:'Profile', link: '/profile' },
  { name: 'Statistics', link: '/'},
  { name: 'Follower', link: '/link'},
  { name: 'Following', link: '/link'}
];
const dropdownArray = menuArray.map((menu, index) => <li key={index}><a href={menu.link}>{menu.name}</a></li>);

export default dropdownArray;
