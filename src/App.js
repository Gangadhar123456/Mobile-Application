import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import Homepage from './component/HomePage';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div>
      {!user ? <Login onLogin={handleLogin} /> : <Homepage username={user} />}
    </div>
  );
};

export default App;
