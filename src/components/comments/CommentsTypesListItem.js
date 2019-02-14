import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  typeButton: {
    padding: '0.5rem',
    marginRight: '1rem',
    borderRadius: '5px',
    backgroundColor: '#D9DCD6',
    cursor: 'pointer'
  },
  activeTypeButton: {
    backgroundColor: '#75485E'
  },
  typeName: {
    fontWeight: 'bold'
  },
  activeTypeName: {
    color: 'white'
  }
}

const CommentsTypesListItem = ({ onClick, isActive, typeName, count }) => {
  const activeButtonStyles = {
    ...styles.typeButton,
    ...styles.activeTypeButton
  }

  const activeTextStyles = {
    ...styles.typeName,
    ...styles.activeTypeName
  }

  return (
    <div
      style={isActive ? activeButtonStyles : styles.typeButton}
      onClick={onClick}
    >
      <span
        style={isActive ? activeTextStyles : styles.typeName}
      >{`${typeName} (${count})`}</span>
    </div>
  )
}

CommentsTypesListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  typeName: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired
}

export default CommentsTypesListItem
