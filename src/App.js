import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import ImportCredential from './pages/ImportCredential'; // Import the ImportCredentialPage component
import Home from './pages/Home';
import MyCredentials from './pages/MyCredentials';
import PresentProof from './pages/PresentProof';
import ConstructConnection from './pages/ConstructConnection'



function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-credentials' element={<MyCredentials/>} />
          <Route path="/import-credential" element={<ImportCredential />} />
          <Route path='/present-proof' element={<PresentProof/>} />
          <Route path='/construct-connection' element={<ConstructConnection/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;