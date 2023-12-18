import React from 'react';
import ProfileLeftContainer from '../components/profileLeftContainer/ProfileLeftContainer';
import ProfileRightContainer from '../components/profileRightContainer/ProfileRightContainer';
import './profile.css';

function Profile(): JSX.Element {
  return (
    <div className="profile_full_container">
      <ProfileLeftContainer />
      <ProfileRightContainer />
    </div>
  );
}

export default Profile;
