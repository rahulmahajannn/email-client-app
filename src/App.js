import "./App.css";
import EmailList from "./Components/EmailList";
import Filter from "./Components/Filter";
import { useState } from "react";

function App() {
  const [favoriteEmails, setFavoriteEmails] = useState(false);
  const [readEmails, setReadEmails] = useState(false);
  const [allEmails, setAllEmails] = useState(true);
  const [unreadEmails, setUnreadEmails] = useState(false);
  const [emailData, setEmailData] = useState("");
  return (
    <div className="App">
      <Filter
        setFavoriteEmails={setFavoriteEmails}
        setAllEmails={setAllEmails}
        setReadEmails={setReadEmails}
        setUnreadEmails={setUnreadEmails}
        emailData={emailData}
        setEmailData={setEmailData}
      />
      <EmailList
        favoriteEmails={favoriteEmails}
        allEmails={allEmails}
        readEmails={readEmails}
        unreadEmails={unreadEmails}
        emailData={emailData}
        setEmailData={setEmailData}
      />
    </div>
  );
}

export default App;
