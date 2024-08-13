import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const JobList = ({ jobs }) => {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{extractTitle(job.text) || 'Job Posting'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2 flex flex-wrap gap-2">
              {extractKeywords(job.text).map((keyword, index) => (
                <Badge key={index} variant="secondary">{keyword}</Badge>
              ))}
            </div>
            <p className="whitespace-pre-wrap text-sm text-gray-600">{job.text}</p>
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

const extractKeywords = (text) => {
  const keywords = ['remote', 'onsite', 'intern', 'senior', 'junior', 'full-time', 'part-time'];
  return keywords.filter(keyword => text.toLowerCase().includes(keyword));
};

export default JobList;