import React from 'react';

const Error = ({ error }) => {
    //senão existir erro retorna null se existir retorna o <p> ...
    if(!error) return null;

    return (
        <p style={{ color: '#f31', margin: '1rem 0' }}>
            {error}
        </p>
    )
}

export default Error;
