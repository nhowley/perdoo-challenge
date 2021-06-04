import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ListPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          TODO: Display table with characters
        </div>
      </div>
    )
  }
}

const ALL_CHARS_QUERY = gql`
  query {
    characters(
      page:0
    ) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`


export default graphql(ALL_CHARS_QUERY)(ListPage)