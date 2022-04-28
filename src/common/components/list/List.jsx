import React from 'react'
import PropTypes from 'prop-types';

import styles from './list.module.css'
import { ListItem } from './ListItem'

const listItems = [
  { id: 11, text: 'first' },
  { id: 12, text: 'second' },
  { id: 13, text: 'third' },
  { id: 14, text: 'fourth' },
]

export const List = ({ item }) => {
  return (
    <div className={styles.listWrapper}>
      <p>List Title</p>
      {listItems.map(({ id, text}) => (
        <ListItem key={id} text={text} />
      ))}
    </div>
  )
}

List.propTypes = {
  /**
   * props
   */
  test: PropTypes.string,
}