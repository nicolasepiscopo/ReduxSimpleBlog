import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount () {
        this.props.fetchPosts();
    }
    
    renderPosts () {
        return this.props.posts.map((post) => {
            return (
                <li className='list-group-item' key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    <span className='pull-xs-right'>{post.categories}</span>
                </li>  
            );
        });
    }

    render () {
        return (
            <div>
                <h2>Posts List</h2>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.all
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);