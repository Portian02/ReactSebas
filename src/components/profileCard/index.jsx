import "./styles.css";

const ProfileCard = ({ userInfo }) => {
  const { name, login, email, phone, picture, location, nat } = userInfo;

  return (
    <div className="profile-card">
      <img
        src={picture?.large}
        alt="Profile"
        className=" profile-picture"
      />
      <div className="profile-details">
        <h2>{`${name?.first} ${name?.last}`}</h2>
        <p>Username: {login?.username}</p>
        <p>Email:{email}</p>
        <p>Country:{location?.country}</p>
        <p>City:{location?.city}</p>
        <p>State:{location?.state}</p>
        <p>Nationality:{nat}</p>
        <p>Phone:{phone}</p>
      </div>
    </div>
  );
};
export default ProfileCard;
