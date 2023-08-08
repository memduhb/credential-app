import React from "react";
import logo from "../fingerprintlogo.png";
import { Navigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [goToImportCred, setGoToImportCred] = React.useState(false);
  const [goToMyCred, setGoToMyCred] = React.useState(false);
  const [goToPresentProof, setGoToPresentProof] = React.useState(false);
  const [goToConstructConnection, setGoToConstructConnection] = React.useState(false);

  if (goToImportCred) {
    return <Navigate to="/import-credential" />;
  }

  if (goToMyCred) {
    return <Navigate to="/my-credentials" />;
  }

  if (goToPresentProof) {
    return <Navigate to="/present-proof" />;
  }

  if (goToConstructConnection) {
    return <Navigate to="/construct-connection" />;
  }



  return (
    <div>
      <div className="welcome-container">
        <img src={logo} alt="Fingerprint Logo" className="logo" />
        <div className="welcome-header">Welcome</div>

        <div className="buttons-container">
          <button
            className="centered-button"
            onClick={() => {
              setGoToMyCred(true);
            }}
          >
            My Credentials
          </button>
          <button
            className="centered-button"
            onClick={() => {
              setGoToImportCred(true);
            }}
          >
            Import Credentials
          </button>
          <button
            className="centered-button"
            onClick={() => {
              setGoToPresentProof(true);
            }}
          >
            Present Proof
          </button>
          <button
            className="centered-button"
            onClick={() => {
              setGoToConstructConnection(true);
            }}
          >
            Construct Connection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
