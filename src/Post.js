import React, { Component } from 'react'
import loaderHOC from './loaderHOC';

class Post extends Component {
  render() {
    return (
      <div>
          {
              this.props.isloading ? <span>Yükleniyor ...</span> 
              :
              this.props.posts.map(post =>
                    <div key={post.id}>
                        {post.title}
                    </div>
                )
          }
      </div>
    )
  }
}
export default loaderHOC(Post);