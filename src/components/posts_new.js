import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostsNew extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                this.context.router.push('/');
            });
    }

    hasDanger(field) {
        return (field.touched && field.invalid) ? 'has-danger' : '';
    }

    render () {
        const { fields: { title, categories, content }, handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h2>Create a new post</h2>
                    <div className={`form-group ${this.hasDanger(title)}`}>
                        <label>Title</label>
                        <input type='text' className='form-control' {...title} />
                        <div className='text-help'>
                            {title.touched ? title.error : ''}
                        </div>
                    </div>
                    <div className={`form-group ${this.hasDanger(categories)}`}>
                        <label>Categories</label>
                        <input type='text' className='form-control' {...categories} />
                        <div className='text-help'>
                            {categories.touched ? categories.error : ''}
                        </div>
                    </div>
                    <div className={`form-group ${this.hasDanger(content)}`}>
                        <label>Content</label>
                        <textarea className='form-control' {...content}></textarea>
                        <div className='text-help'>
                            {content.touched ? content.error : ''}
                        </div>
                    </div>

                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                    <Link to='/' className='btn btn-danger'>
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a username';
    }

    if(!values.categories) {
        errors.categories = 'Enter categories';
    }

    if(!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);