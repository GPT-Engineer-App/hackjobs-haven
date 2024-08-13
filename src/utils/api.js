import axios from 'axios';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const fetchWhosHiringPosts = async () => {
  const whosHiringUrl = `${BASE_URL}/item/39634345.json`;
  const { data: whosHiringThread } = await axios.get(whosHiringUrl);
  
  const jobPromises = whosHiringThread.kids.map(async (id) => {
    const { data: job } = await axios.get(`${BASE_URL}/item/${id}.json`);
    return job;
  });

  return Promise.all(jobPromises);
};