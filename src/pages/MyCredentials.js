import React from 'react';
import { Navigate } from "react-router-dom";

function MyCredentials() {
    const [goToHome, setGoToHome] = React.useState(false);
    
    if (goToHome) {
        return <Navigate to="/" />;
      };

    return (
        <div className="welcome-container">
        <div className="welcome-header">My Credentials</div>
        <button className="return-button" onClick={() => {setGoToHome(true);}}>Return to Home Page</button>
      </div>
        
          
    
    );
}

export default MyCredentials;
