import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { createPost } from "../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostNew extends Component {
  titlevalidation = text =>
    text && text.length ? undefined : `Please Enter Title`;
  categoriesvalidation = text =>
    text && text.length ? undefined : `Please Enter Some Category`;
  contentvalidation = text =>
    text && text.length ? undefined : `Please Add Content`;

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={`form-group `}>
      <label>
        <b>{label}</b>
      </label>
      {type === "text" ? (
        <input
          {...input}
          placeholder={label}
          type={type}
          className="form-control"
          style={
            touched && error
              ? {
                  borderColor: "red",
                  boxShadow: "0 0 7px rgb(237, 56, 56)"
                }
              : { borderColor: "grey" }
          }
        />
      ) : (
        <textarea
          {...input}
          placeholder={label}
          className="form-control"
          style={
            touched && error
              ? {
                  borderColor: "red",
                  boxShadow: "0 0 7px rgb(237, 56, 56)"
                }
              : { borderColor: "grey" }
          }
        />
      )}
      {touched &&
        ((error && (
          <div style={{ textAlign: "left", color: "red" }}>{error}</div>
        )) ||
          (warning && (
            <div style={{ textAlign: "left", color: "red" }}>{warning}</div>
          )))}
    </div>
  );

  onSubmit = props => {
    this.props.createPost(props, () => this.props.history.push("/"));
  };

  render() {
    const { handleSubmit } = this.props;

    // console.log("Here", this.props);
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <hr style={{ borderWidth: "0.1rem", borderColor: "rgb(2, 91, 109)" }} />
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
          Create A New Post
        </h2>
        <hr
          style={{ borderWidth: "0.15rem", borderColor: "rgb(2, 91, 109)" }}
        />
        <div>
          {/* <input type="text" className="form-control" {...title} /> */}
          <Field
            name="title"
            type="text"
            label="Title"
            component={this.renderField}
            validate={this.titlevalidation}
          />
          {/* <input type="text" className="form-control" /> */}
          <Field
            name="categories"
            type="text"
            component={this.renderField}
            label="Categories"
            validate={this.categoriesvalidation}
          />
          {/* <textarea className="form-control" /> */}
          <Field
            name="content"
            type="textarea"
            label="Content"
            component={this.renderField}
            validate={this.contentvalidation}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginRight: "2rem" }}
        >
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

export default reduxForm({
  form: "PostNewForm"
})(
  connect(
    null,
    { createPost }
  )(PostNew)
);
