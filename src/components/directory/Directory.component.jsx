// BASIC:
import React from 'react';
import './Directory.style.sass';

// COMPONENTS:
import MenuItemComp from '../menu-item/MenuItem.component';

// UTILITIES:
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directoriesSelector } from '../../redux/directories/directoriesSelectors';

// COMPONENT:
const DirectoryComp = ({ directories }) => (
  <div className='directory-menu'>
    {directories.map(({ id, ...otherSectionProps }) => (
      <MenuItemComp key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directories: directoriesSelector,
});

export default connect(mapStateToProps)(DirectoryComp);
