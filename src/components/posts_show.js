import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsShow extends Component {
    render() {
        return (
            <div>
                <h2>Show Post</h2>
                Show post {this.props.params.id}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    
    }
}

export default connect(mapStateToProps, { getPost })(PostsShow);