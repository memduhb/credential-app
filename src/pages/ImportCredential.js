import React, { useState } from "react";
import "./ImportCredential.css"; // Import your custom stylesheet
import { Navigate } from "react-router-dom";

function ImportCredential() {
  const [goToHome, setGoToHome] = React.useState(false);



  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    gender: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    // Add your submission logic here
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  if (goToHome) {
    return <Navigate to="/" />;
  };

  return (
    <div className="welcome-container">
    <div className="import-cred-container">
      <h1>Import Credentials</h1>
      <form onSubmit={handleSubmit} className="import-cred-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Name"
        />

        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Surname"
        />

        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Age"
        />

        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Gender"
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
        <button className="return-button" onClick={() => {setGoToHome(true);}}>Return to Home Page</button>
      </form>
    </div>
    </div>
  );
}

export default ImportCredential;
