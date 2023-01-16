import "./EmailOverview.css";

const EmailOverview = ({ email }) => {
  console.log("🚀 ~ file: EmailOverview.js:4 ~ EmailOverview ~ email", email);
  const profileImageUrl = `https://ui-avatars.com/api/?name=${email.from.name}&length=1&background=E54065&rounded=true&color=fff&size=50`;

  return (
    <div className="emailContainer">
      <div className="imageContainer">
        <img src={profileImageUrl} />
      </div>
      <div className="contentContainer">
        <div>
          From: {email.from.name} {email.from.email}
        </div>
        <div>Subject: {email.subject}</div>
        <div>{email.short_description}</div>
        <div className="dateAndFavoriteDiv">
          <div>{new Date(email.date).toUTCString()}</div>
          {email.isFavorite ? (
            <div className="favoriteText"> Favorite </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailOverview;
