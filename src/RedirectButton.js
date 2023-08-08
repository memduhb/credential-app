import React from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectButton() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/new-page'); // Replace 'new-page' with the actual route you want to redirect to
  };

  return (
    <button onClick={handleRedirect}>Click to Redirect</button>
  );
}

export default RedirectButton;