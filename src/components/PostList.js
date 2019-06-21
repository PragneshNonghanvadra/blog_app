import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { Link } from "react-router-dom";

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPost = () => {
    if (this.props.posts) {
      return this.props.posts.map(post => {
        return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <div>
                <strong>{post.title}</strong>
                <span className="float-right">{post.categories}</span>
              </div>
            </Link>
          </li>
        );
      });
    } else {
      return <li className="list-group-item">No Post yet</li>;
    }
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: "4rem" }}>
          <div className="float-right">
            <Link to="/posts/new" className="btn btn-primary">
              Add a Post
            </Link>
          </div>
          <h3>Posts</h3>
        </div>
        <ul className="list-group">
          {this.props.posts && this.props.posts.length !== 0 ? (
            this.renderPost()
          ) : (
            <li className="list-group-item">
              <span>Loading...</span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
