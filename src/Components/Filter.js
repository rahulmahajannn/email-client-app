import "./Filter.css";

const Filter = ({
  setFavoriteEmails,
  setAllEmails,
  setReadEmails,
  setUnreadEmails,
  emailData,
  setEmailData,
}) => {
  const showFavorites = () => {
    setFavoriteEmails(true);
    setAllEmails(false);
    setReadEmails(false);
    setUnreadEmails(false);
    setEmailData({});
  };
  const showAllEmails = () => {
    setAllEmails(true);
    setFavoriteEmails(false);
    setReadEmails(false);
    setUnreadEmails(false);
    setEmailData({});
  };
  const showReadEmails = () => {
    setReadEmails(true);
    setAllEmails(false);
    setFavoriteEmails(false);
    setUnreadEmails(false);
    setEmailData({});
  };
  const showUnreadEmails = () => {
    setUnreadEmails(true);
    setReadEmails(false);
    setAllEmails(false);
    setFavoriteEmails(false);
    setEmailData({});
  };
  return (
    <div className="filter">
      <div className="filterButton" onClick={showAllEmails}>
        All Emails
      </div>
      <div className="filterButton" onClick={showUnreadEmails}>
        Unread
      </div>
      <div className="filterButton" onClick={showReadEmails}>
        Read
      </div>
      <div className="filterButton" onClick={showFavorites}>
        Favorites
      </div>
    </div>
  );
};

export default Filter;
