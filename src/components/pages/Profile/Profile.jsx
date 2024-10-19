
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();

  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <p>Profile ID: {id}</p>
    </div>
  );
};

export default Profile;
