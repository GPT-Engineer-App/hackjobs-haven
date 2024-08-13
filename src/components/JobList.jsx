import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const JobList = ({ jobs }) => {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title || 'Job Posting'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{job.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default JobList;