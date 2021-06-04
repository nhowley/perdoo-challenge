import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'graphql-tag'

class ListPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        characters:[]
    }
  }

  componentDidMount() {
    console.log("this.props", this.props.data.characters.results)
    this.getCharacters()
  }

  getCharacters = ()=> {
    console.log("props", this.props.data)
    if(this.props.data.characters.info.next !== null){
      console.log("ANOThER PAGE")
    }
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }
    return (
      <div>
        <h1>CHARACTERS GO HERE</h1>
        <div>
          {this.props.data.characters.results.map((character) =>
            <div>{character.name}</div>
          )}
        </div>
      </div>
    )
  }
}



const ALL_CHARS_QUERY = gql`
query Characters($page: Int = 0){
  characters(
    page:$page
  ) {
    info {
      count
      next
    }
    results {
      name
    }
  }
}
`


export default graphql(ALL_CHARS_QUERY)(ListPage);