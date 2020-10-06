import React from 'react';
import data from '../data/data1.json';
import TimelineCard from './TimelineCard';
import Timestamp from './Timestamp'

const Timeline = function() {
    return (
            data.map((data, id) => {
                return (
                    <div className="timeline-wrapper" key={id}>
                        <Timestamp data={data} /> 
                        <TimelineCard data={data} />
                    </div>
                );                
            })
    );
};

export default Timeline;
