import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

class PostsIndex extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <div className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </Link>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog Admin</h3>
          <Link className="btn btn-primary btn-cta" to="/posts/new">
            Lets write a post!
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
