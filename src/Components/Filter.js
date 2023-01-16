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
      <div>Filter By:</div>
      <button className="filterButton" onClick={showAllEmails}>
        All Emails
      </button>
      <button className="filterButton" onClick={showUnreadEmails}>
        Unread
      </button>
      <button className="filterButton" onClick={showReadEmails}>
        Read
      </button>
      <button className="filterButton" onClick={showFavorites}>
        Favorites
      </button>
    </div>
  );
};

export default Filter;
