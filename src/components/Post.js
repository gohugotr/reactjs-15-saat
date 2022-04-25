import React, { Component } from "react";
import axios from "axios";
import withRouter from "../hoc/Detayyolu";
import { Link } from "react-router-dom";

class Post extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    //console.log(this.props.match.params.post_id);
    let id = this.props.match.params.post_id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          post: data,
        });
      });
  }
  render() {
    const {post} = this.state;
    const postData =  post ? (
      <div className="post">
        <h3 className="center">{ post.title}</h3>
        <p>{ post.body}</p>
      </div>
    ) : (
      <div>Yükleniyor ...</div>
    );

    return <div className="container">{postData}
    <Link to={"/"}>Home</Link>
    </div>;
  }
}
export default withRouter(Post);