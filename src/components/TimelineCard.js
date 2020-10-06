import React from 'react';
const TimelineCard = function({data}) {
    // There is 100% a better way to do this but I am rushing
    let background = {
        'background-color': data.backgroundColor ? data.backgroundColor : 'white',
        'color': data.backgroundColor && data.backgroundColor === 'red' ? 'white' : 'black'
    }

    return(
        <div className="timeline-card">
            <div className="timeline-card-inner" style={background}>
                {data.judgmentIcon &&
                    <span className="judgement-icon">
                        {/* {data.judgmentIcon === "errorIcon" ? <img src="../" /> : 'success'} */}
                        {data.judgmentIcon}
                    </span>
                }
                <div className="title-container">
                    <div className="title">
                        {data.title}
                    </div>
                    <div className="subtitle">
                        {data.subtitle}
                    </div>
                </div>
                <div className="notes">
                    {data.notes}
                </div>
                {data.evaluation &&
                    <div className="eval-container">
                        { data.evaluation.text &&
                            <div className="eval-text">
                                {data.evaluation.text}
                            </div>
                        }

                        { data.evaluation.score && data.evaluation.maxScore &&
                            <div className="eval-score">
                            {data.evaluation.score} / {data.evaluation.maxScore}
                        </div>
                        }
                    </div>
                }

                <span className='circle-icon'></span>
            </div>
        </div>
    );
};

export default TimelineCard;