import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _groupBy from 'lodash.groupby'

import CommentsTypesList from './CommentsTypesList'
import CommentsList from './CommentsList'

const styles = {
  commentsContainer: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'lightGrey'
  }
}

// move to utils
const getCommentsTypesAndCount = groupedComments =>
  Object.keys(groupedComments).map(type => ({
    count: groupedComments[type].length,
    type
  }))

const Comments = ({
  comments,
  formatDate,
  formatCommentsType,
  defaultSelectedType,
  groupBy
}) => {
  const getActiveComments = () => groupedComments[activeType] || []

  const [activeType, setActiveType] = useState(defaultSelectedType)
  const [groupedComments, setGroupedComments] = useState({})
  useEffect(() => {
    // perf optimalization, group comments by type only if comments has changed
    setGroupedComments(_groupBy(comments, groupBy))
  }, [comments])
  const commentsTypes = getCommentsTypesAndCount(groupedComments)

  return (
    <div style={styles.commentsContainer}>
      <CommentsTypesList
        commentsTypes={commentsTypes}
        setActiveType={setActiveType}
        activeType={activeType}
        formatCommentsType={formatCommentsType}
      />
      <CommentsList
        activeComments={getActiveComments()}
        formatDate={formatDate}
      />
    </div>
  )
}

Comments.propTypes = {
  /** array of comments */
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      type: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      author: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        avatarSrc: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  /** type which should be selected as default (set this when groupingBy another than default which is type) */
  defaultSelectedType: PropTypes.string.isRequired,
  /** function to format date in comments rows */
  formatDate: PropTypes.func,
  /** function to format or lozalize types buttons */
  formatCommentsType: PropTypes.func,
  /** group comments to types by this value (aslo works nested i.e. "author.name") */
  groupBy: PropTypes.string.isRequired
}

Comments.defaultProps = {
  defaultSelectedType: '1',
  formatDate: date => date,
  formatCommentsType: type => type,
  groupBy: 'type'
}

export default Comments
