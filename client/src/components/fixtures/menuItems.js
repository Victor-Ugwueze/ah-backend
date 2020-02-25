// react libraries
import React from 'react';


const menuArray = () => {
  const token = localStorage.getItem('authorsHavenAuthToken');
  const user = JSON.parse(localStorage.getItem('user'));
  if (token !== null) {
    const profile = `/profile/@${user.username}_${user.id}`;
    const follower = `/@${user.username}_${user.id}/followers`;
    const following = `/@${user.username}_${user.id}/following`;
    const menu = [
      { name: 'Profile', link: profile },
      { name: 'Statistics', link: '/' },
      { name: 'Follower', link: follower },
      { name: 'Following', link: following }
    ];
    return menu.map(
      (menuItem, index) => <li key={index}><a href={menuItem.link}>{menuItem.name}</a></li>
    );
  }
};

export default menuArray;
