import "./EmailList.css";

import { useEffect, useState } from "react";
import EmailOverview from "./EmailOverview";
import EmailDescription from "./EmailDescription";

const _ = require("lodash");
const EmailList = ({
  favoriteEmails,
  allEmails,
  readEmails,
  unreadEmails,
  emailData,
  setEmailData,
}) => {
  console.log(
    "🚀 ~ file: EmailList.js:9 ~ EmailList ~ unreadEmails",
    unreadEmails
  );
  const [emails, setEmails] = useState("");

  const fetchEmails = async () => {
    const emailResponse = await fetch("https://flipkart-email-mock.now.sh/");
    const fetchedEmails = await emailResponse.json();
    const newEmailList = _.map(fetchedEmails.list, (email) => {
      const isFavorite =
        localStorage.getItem(`favoriteId-${email.id}`) || false;
      const isRead = localStorage.getItem(`readId-${email.id}`) || false;
      return { ...email, isFavorite, isRead };
    });
    setEmails(newEmailList);
  };

  useEffect(() => {
    setEmails(fetchEmails());
  }, []);

  const getData = async (email) => {
    const data = await fetch(
      `https://flipkart-email-mock.vercel.app/?id=${email.id}`
    );
    setEmailData(await data.json());
  };

  const emailsToDisplay = favoriteEmails
    ? _.filter(emails, ["isFavorite", "true"])
    : readEmails
    ? _.filter(emails, ["isRead", "true"])
    : unreadEmails
    ? _.filter(emails, ["isRead", false])
    : allEmails
    ? emails
    : [];

  return (
    <div className="emailList">
      <div className="emailOverview">
        {emailsToDisplay.length ? (
          _.map(emailsToDisplay, (email) => {
            return (
              <li type="none" key={email.id} onClick={() => getData(email)}>
                <EmailOverview email={email} emailData={emailData} />
              </li>
            );
          })
        ) : (
          <>
            <h1>Nothing to display.</h1>
          </>
        )}
      </div>
      <div>
        {!_.isEmpty(emailData) ? (
          <EmailDescription
            emailBody={emailData}
            emailInfo={_.find(emails, ["id", emailData.id])}
            setEmails={setEmails}
            emails={emails}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EmailList;
