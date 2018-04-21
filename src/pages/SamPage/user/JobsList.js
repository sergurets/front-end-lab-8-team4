import React from 'react';

const JobList = (props) => {
    const renderJobs = (jobs) => (
        jobs ?
            jobs.map((item, i) => (
                <div className="user-info__list-item" key={i}>{item.name}</div>
            )) : null
    )

    return (
        <div>
            {renderJobs(props.data.jobs)}
        </div>
    )
}

export default JobList;