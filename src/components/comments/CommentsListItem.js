import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '1rem'
  },
  authorAvatar: {
    flexShrink: 0,
    marginRight: '1rem',
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'lightgrey'
  },
  content: {
    padding: '0.7rem',
    borderRadius: '10px',
    backgroundColor: '#51A3A3',
    color: 'white'
  },
  contentContainer: {},
  authorName: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  createdAt: {
    display: 'block',
    fontSize: '14px',
    opacity: '0.85',
    marginTop: '0.2rem',
    marginLeft: '0.4rem'
  }
}

const CommentsListItem = ({ comment, formatDate }) => {
  const { author, text, createdAt } = comment
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.authorAvatar,
          backgroundImage: `url('${author && author.avatarSrc}')`
        }}
      />
      <div style={styles.contentContainer}>
        <div style={styles.content}>
          <span style={styles.authorName}>{author && author.name}</span>
          <span style={styles.text}>{text}</span>
        </div>
        <span style={styles.createdAt}>{formatDate(createdAt)}</span>
      </div>
    </div>
  )
}

CommentsListItem.propTypes = {
  comment: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired
}

export default CommentsListItem
