import React from 'react';
import './MenuItem.style.sass';
import { withRouter } from 'react-router-dom';

const MenuItemComp = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <section
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='background-image'></div>

      <div className='item-content'>
        <h2 className='title'>{title.toUpperCase()}</h2>

        <span className='subtitle'>shop now</span>
      </div>
    </section>
  );
};

export default withRouter(MenuItemComp);
