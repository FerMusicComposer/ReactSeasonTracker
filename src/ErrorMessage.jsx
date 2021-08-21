import React from 'react';

const ErrorMessage = props => {
    return (
        <div class="ui negative message">
            <div class="header">{props.errorMessage}</div>
        </div>
    );
};

export default ErrorMessage;
