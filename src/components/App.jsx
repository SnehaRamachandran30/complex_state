import React, { useState } from "react";

function App() {
  const [fullname, setname] = useState({ fname: "", lname: "" });
  function handlename(event) {
    const newvalue = event.target.value;
    const wname = event.target.name;
    setname((previousname) => {
      /* console.log(previousname); */
      if (wname === "fname") {
        return {
          fname: newvalue,
          lname: previousname.lname
        };
      } else {
        return {
          fname: previousname.fname,
          lname: newvalue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form>
        <input
          name="fname"
          placeholder="First Name"
          value={fullname.fname}
          onChange={handlename}
        />
        <input
          name="lname"
          placeholder="Last Name"
          value={fullname.lname}
          onChange={handlename}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
