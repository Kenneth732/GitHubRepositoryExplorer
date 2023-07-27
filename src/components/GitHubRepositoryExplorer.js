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

  const handleSearch = () => {
    fetch(`https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="github-repository-explorer">
      <h2>GitHub Repository Explorer</h2>

      <div className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by repository name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

    </div>
  );
};

export default GitHubRepositoryExplorer;
