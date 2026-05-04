const UserCard = ({ user }) => {
  if (!user) return null;

  const {
    name,
    email,
    location,
    picture
  } = user;

  return (
    <div className="card">
      <img
        src={picture?.large}
        alt={`${name?.first || ""} ${name?.last || ""}`}
      />

      <h2>
        {name?.first} {name?.last}
      </h2>

      <p>{email}</p>

      <p className="location">
        {location?.city}, {location?.country}
      </p>
    </div>
  );
};

export default UserCard;