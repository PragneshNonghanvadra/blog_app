import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

class PostShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    if (!this.props.post) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <div style={{ marginBottom: "3rem" }}>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <button
            className="btn btn-danger float-right"
            onClick={() =>
              this.props
                .deletePost(this.props.match.params.id)
                .then(() => this.props.history.push("/"))
            }
          >
            Delete Post
          </button>
        </div>

        <h3>{this.props.post.title}</h3>
        <h6>{this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostShow);
