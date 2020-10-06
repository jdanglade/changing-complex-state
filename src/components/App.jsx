import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleFullName(event) {
    const { name, value } = event.target;

    if (name === "fName") {
      setFullName((previousName) => {
        return { fName: value, lName: previousName.lName };
      });
    } else if (name === "lName") {
      setFullName((previousName) => {
        return { fName: previousName.fName, lName: value };
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleFullName}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleFullName}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
