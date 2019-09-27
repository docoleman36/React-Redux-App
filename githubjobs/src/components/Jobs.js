import React, { useEffect } from 'react';
import { Card } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { getJob } from '../actions';


const Jobs = ({ getJob, job, isFetching, error }) => {
  useEffect(() => {
    getJob();
  }, [getJob]);

  if (isFetching) {
    return <h3>Fetching Jobs Real Quick</h3>
  }

  return (
    <div>
      <h2>Developer Jobs from Github</h2>
      <div className="cards">
        {job.map(jobs => (
          <div className="card" key={jobs.id}>
            <Card>
              <h1>{jobs.company}</h1>
              <img width="150" alt="company_logo" src={jobs.company_logo} />
              <p>{jobs.title}</p>
              <p>{jobs.type}</p>
              <p>{jobs.location}</p>
              <p>{jobs.create_at}</p>
              <p>{jobs.company_url}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    job: state.job,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps, { getJob })(Jobs);