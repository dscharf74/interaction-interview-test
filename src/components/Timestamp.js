import React from 'react';
const Timestamp = ({data}) => {
    
    return (
        <div className="timestamp-container">
            <div className="timestamp">
                {
                    new Date(data.time * 1000).toISOString().substr(11, 8)
                }
            </div>
        </div>
    );
}

export default Timestamp;