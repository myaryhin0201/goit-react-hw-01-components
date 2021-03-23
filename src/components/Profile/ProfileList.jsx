import Profile from './Profile';

const ProfileList = ({ socialProfile }) => (
  <div className="profileList">
    <Profile
      name={socialProfile.name}
      tag={socialProfile.tag}
      location={socialProfile.location}
      avatar={socialProfile.avatar}
      stats={socialProfile.stats}
    />
  </div>
);
export default ProfileList;
