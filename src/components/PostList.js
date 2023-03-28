import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : []
      }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)       // form here we can verify what we get as response.
        })
        .catch(error => {
            console.log(error)
        })
    }

  render() {
    return (
      <div>
        List of posts : 
        {
            
        }
      </div>
    )
  }
}

export default PostList