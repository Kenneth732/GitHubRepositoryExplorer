import React, { useState, useEffect } from 'react';
import './GitHubRepositoryExplorer.css'; // Import the CSS file

const GitHubRepositoryExplorer = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMostStarredRepositories();
  }, []);




};

export default GitHubRepositoryExplorer;
