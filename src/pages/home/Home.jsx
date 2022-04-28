import React from 'react'
import PropTypes from 'prop-types';

import { Button } from '../../common/components/button/Button';
import { List } from '../../common/components/list/List';
import styles from './home.module.css';

export const Home = ({ bg = styles.skyblueBg, font = styles.font1, btn }) => {
  return (
    <div className={`${styles.pageWrapper} ${bg} ${font}`}>
      <h1>Welcome to the Home page</h1>
      <Button backgroundColor={btn} size="large" onClick={() => console.log('A button has been clicked!')} label="Click Me" />
      <List />
    </div>
  )
}

Home.propTypes = {
  /**
   * Page background color prop
   */
  bg: PropTypes.object,
  /**
   * Page text font prop
   */
  font: PropTypes.object,
}