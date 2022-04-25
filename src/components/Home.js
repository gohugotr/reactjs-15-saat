import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    posts: [],
    isloading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data)
        .then((data) => {
          this.setState({
            posts: data.slice(0, 5), // 3 post getir
            isloading: false,
          });
        });
    }, 0);
  }
  // onSearchImage = async () => {
  //   const postData = await axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.data);
  //   this.setState({
  //     gelenData: postData,
  //     isloading: false,
  //   });
  // };

  render() {
    const { posts, isloading } = this.state; // Bunu yazmazsak, this.state.posts.map(... yazacaktık.
    const postlist =
      posts.length && !isloading ? (
        posts.map((gelenPost) => {
          return (
            <div className="card " key={gelenPost.id}>
              <div className="card-content ">
                <Link to={"/" + gelenPost.id}>
                  <h4 className="card-title ">{gelenPost.title}</h4>
                </Link>
                {gelenPost.body}
              </div>
            </div>
          );
        })
      ) : isloading ? (
        <h4>Yükleniyor ... </h4>
      ) : (
        <h4>Veri bulunamadı</h4>
      );

    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
           {postlist}
        </div>
        {/* <button onClick={this.onSearchImage}>Post Getir</button> */}
      </div>
    );
  }
}

export default Home;
