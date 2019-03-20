import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomInt } from '../utils/utils';

export class Posts extends Component {
  render() {
    const { imgIndex } = this.props;

    return (
      <div className="post">
        <h4>Title</h4>
        <img src={`https://picsum.photos/300/300/?image=${imgIndex}`} alt="a lorem picsum picture" />
        <p>description</p>
        <div className="likes">{randomInt(100)} ♡</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
