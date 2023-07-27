import React, { useState, useEffect } from 'react';
import './GitHubRepositoryExplorer.css'; // Import the CSS file

const GitHubRepositoryExplorer = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMostStarredRepositories();
  }, []);

  const fetchMostStarredRepositories = () => {
    fetch('https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc')
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items);
      })
      .catch((error) => console.error('Error:', error));
  };


};

export default GitHubRepositoryExplorer;
