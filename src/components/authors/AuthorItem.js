import React, { PropTypes } from 'react'
import styles from './AuthorList.scss'
import { Link } from 'react-router'

const AuthorItem = ({ authorName, authorImg, authorUrl }) => (
  <div className={styles['author-item']}>
    <Link to={authorUrl}>
      <img src={authorImg} className={styles['author-img']} />
      <div className={styles['author-name']} >{authorName}</div>
    </Link>
  </div>
)

AuthorItem.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorImg: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired
}

export default AuthorItem
