import React from 'react'
import PropTypes from 'prop-types'

import CommentsListItem from './CommentsListItem'

const styles = {
  commentsListContainer: {
    paddingTop: '0.5rem',
    overflowY: 'scroll',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    maxHeight: '50vh'
  }
}

const CommentsList = ({ activeComments, formatDate }) => (
  <div style={styles.commentsListContainer}>
    {Array.isArray(activeComments) &&
      activeComments.map(comment => (
        <CommentsListItem
          comment={comment}
          key={comment.id}
          formatDate={formatDate}
        />
      ))}
  </div>
)

CommentsList.propTypes = {
  activeComments: PropTypes.array.isRequired,
  formatDate: PropTypes.func
}

export default CommentsList
