import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types';

import styles from './typography.module.css'

export const Title = ({ text, size, color }) => {
  return (
    <h1
      className={classNames(
        styles.title
      )}
      style={{ color, fontSize: size }}
    >
      {text}
    </h1>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}
