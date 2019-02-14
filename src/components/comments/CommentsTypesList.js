import React from 'react'
import PropTypes from 'prop-types'

import CommentsTypesListItem from './CommentsTypesListItem'

const styles = {
  commentsTypesContainer: {
    display: 'flex',
    borderBottom: 'solid',
    borderWidth: '1px',
    borderColor: 'lightgrey',
    padding: '0.5rem',
    overflowX: 'scroll'
  }
}

const CommentsTypesList = ({
  commentsTypes,
  setActiveType,
  activeType,
  formatCommentsType
}) => {
  const isActive = type => type === activeType

  return (
    <div style={styles.commentsTypesContainer}>
      {commentsTypes.map(commentType => (
        <CommentsTypesListItem
          key={`commentType${commentType.type}`}
          typeName={formatCommentsType(commentType.type)}
          isActive={isActive(commentType.type)}
          count={String(commentType.count)}
          onClick={() => setActiveType(commentType.type)}
        />
      ))}
    </div>
  )
}

CommentsTypesList.propTypes = {
  commentsTypes: PropTypes.array.isRequired,
  setActiveType: PropTypes.func.isRequired,
  activeType: PropTypes.string.isRequired,
  formatCommentsType: PropTypes.func
}

export default CommentsTypesList
