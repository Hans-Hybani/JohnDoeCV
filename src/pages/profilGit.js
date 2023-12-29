import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/git.css'
import { Link } from 'react-router-dom';


const Profil = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/github-john-doe');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching GitHub profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="git">
      {profile ? (
        <div>
          <h2>{profile.login}</h2>
          <img src={profile.avatar_url} alt="GitHub Avatar" />
          <p>{profile.bio}</p>
          <p>Followers: {profile.followers}</p>
          <p>Following: {profile.following}</p>
          <p>Public Repositories: {profile.public_repos}</p>
          <p>URL Repository:<Link className="lienGit" to="https://api.github.com/users/github-john-doe" target="_blank"> https://api.github.com/users/github-john-doeAccueil</Link> </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profil;
