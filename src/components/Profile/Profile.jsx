import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin } from "antd";
import "./Profile.scss"

const Profile = () => {
  const { getLoggedUserInfo, user, token } = useContext(UserContext);

  useEffect(() => {
    getLoggedUserInfo();
    console.log(user)
  }, [token]);

  if (!user) {
    return <Spin size="medium" />;
  }

  return (
    <div className="profile-container">
      
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
