import React from 'react';

export default (props) => {
    const alignment = (props.alignment)? `pull-xs-${props.alignment}` : '';
    
    return (
        <a href={props.route} className={`btn btn-primary ${alignment}`}>
            {props.text}
        </a>
    );
}