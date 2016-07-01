import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-faded">
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to='/posts/new'>New Post</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}