import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions/index';
import { browserHistory } from 'react-router';

class PostsShow extends Component {

    componentWillMount() {
        this.props.getPost(this.props.params.id);
    }

    onDeletePost() {
        if(confirm("Are you sure?")) {
            this.props.deletePost(this.props.params.id)
                .then(() => {
                    browserHistory.push('/');
                });
        }
    }
    
    render() {
        const { post } = this.props;

        if(!post)
            return <h2>Loading...</h2>;

        return (
            <div>
                <h2>
                    {post.title}
                </h2>

                <hr/>
                <b>Cathegories:</b> {post.categories}
                <hr/>

                {post.content}
                <div className='text-xs-right'>
                    <button 
                        className='btn btn-danger btn-sm' 
                        onClick={() => this.onDeletePost()}>
                        Delete Post
                    </button>
                </div>
            </div>            
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, { getPost, deletePost })(PostsShow);