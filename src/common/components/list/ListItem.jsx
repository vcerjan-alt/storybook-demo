import React from 'react'
import { Button } from '../button/Button'
import styles from './listItem.module.css'

export const ListItem = ({ text, btn }) => {
  return (
    <div className={styles.listItemWrapper}>
      <p>{text ?? 'List item text'}</p>
      <Button {...btn} size="small" label={'Details'} />
    </div>
  )
}