import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         errorMsg : ""
      }
    }

    componentDidMount() {
        // Invalid Link for the API...
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)       // form here we can verify what we get as response.
            this.setState({
                posts : response.data
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({
                errorMsg : "Error in Retrieving Data!"
            })
        })
    }

  render() {
    const {posts, errorMsg} = this.state
    return (
      <div>
        List of posts : 
        {
            posts.length ? 
            posts.map(post => <div key={post.id}> {post.title} </div> ) : null
        }

        {
            errorMsg ? <div> {errorMsg} </div> : null
        }

      </div>
    )
  }
}

export default PostList