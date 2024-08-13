import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWhosHiringPosts } from '../utils/api';
import JobList from '../components/JobList';
import SearchBar from '../components/SearchBar';
import FilterOptions from '../components/FilterOptions';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ['whosHiring'],
    queryFn: fetchWhosHiringPosts,
  });

  const [searchTerm, setSearchTerm] = React.useState('');
  const [filters, setFilters] = React.useState({
    remote: false,
    onsite: false,
    intern: false,
  });

  const filteredJobs = React.useMemo(() => {
    if (!jobs) return [];
    return jobs.filter(job => {
      const matchesSearch = job.text.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilters = 
        (!filters.remote || job.text.toLowerCase().includes('remote')) &&
        (!filters.onsite || job.text.toLowerCase().includes('onsite')) &&
        (!filters.intern || job.text.toLowerCase().includes('intern'));
      return matchesSearch && matchesFilters;
    });
  }, [jobs, searchTerm, filters]);

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  );
  if (error) return <div className="text-red-500 text-center mt-8">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Hacker News: Who's Hiring</h1>
      <div className="mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="mb-6">
        <FilterOptions filters={filters} setFilters={setFilters} />
      </div>
      <JobList jobs={filteredJobs} />
    </div>
  );
};

export default Index;