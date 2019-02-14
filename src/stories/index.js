import React from 'react'
import styles from '../App.css'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Comments from '../components/comments'

import mockData from './mockData'

const getTranslationForType = type => {
  switch (type) {
    case '1':
      return 'Internal Clients'
    case '2':
      return 'External Clients'
    case '3':
      return 'Super Clients'
    default:
      return type
  }
}

storiesOf('Comments', module)
  .addDecorator(withInfo)
  .addParameters({
    info: `
    #### Comments component workflow
    - accepting array of comments in proper shape
    - grouping comments by types
    - generating comments types tabs based on count of types
    - using hooks to show active comments by type 

    ##### Captions
    - Buttons are generated based on type in ASC order => 0,1,2 ...
    - it uses package lodash.groupby
        
    ##### TODO
    - Add support for custom order of type buttons.
    - Add overrides for styles. (To edit styles just copy source code of components and edit it :) )
    `
  })
  .add('only comments prop', () => <Comments comments={mockData} />)
  .add('with formatDate prop', () => (
    <Comments
      comments={mockData}
      formatDate={createdAt => new Date(createdAt).toLocaleDateString()}
    />
  ))
  .add('with formatCommentsType prop', () => (
    <Comments
      comments={mockData}
      formatDate={createdAt => new Date(createdAt).toLocaleDateString()}
      formatCommentsType={type => getTranslationForType(type)}
    />
  ))
  .add('with defaultSelectedType prop', () => (
    <Comments
      comments={mockData}
      formatDate={createdAt => new Date(createdAt).toLocaleDateString()}
      formatCommentsType={type => getTranslationForType(type)}
      defaultSelectedType="2"
    />
  ))
  .add("with groupBy 'author.name' prop", () => (
    <Comments
      comments={mockData}
      formatDate={createdAt => new Date(createdAt).toLocaleDateString()}
      formatCommentsType={type => getTranslationForType(type)}
      // it doesn't make sense to group by author name but maybe in the future there will be another key to group by
      defaultSelectedType="Milos Zemanka"
      groupBy="author.name"
    />
  ))
