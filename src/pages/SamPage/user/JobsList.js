import React from 'react';

const JobList = (props) => {
    const renderJobs = (jobs) => (
        jobs ?
            jobs.map((item, i) => (
                <div className="user-info__list-item" key={i}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            )) : null
    )

    return (
        <div>
            {renderJobs(props.data.jobs)}
        </div>
    )
}

export default JobList;