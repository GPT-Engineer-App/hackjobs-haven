import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const JobList = ({ jobs }) => {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">{extractTitle(job.text) || 'Job Posting'}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-base text-gray-600">{decodeHtmlEntities(job.text)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const extractTitle = (text) => {
  const firstLine = text.split('\n')[0];
  return firstLine.length > 100 ? firstLine.substring(0, 100) + '...' : firstLine;
};

const decodeHtmlEntities = (text) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
};

export default JobList;