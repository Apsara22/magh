import React, { useState } from 'react';

function App1() {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div className="App">
      <h1>React Line-Through Example</h1>
      <p className={status ? 'line-through' : ''}>
        This text will have a line-through when the status is true.
      </p>
      {/* Alternatively, you can use inline styles */}
      {/* <p style={{ textDecoration: status ? 'line-through' : 'none' }}> */}
      {/*   This text will have a line-through when the status is true. */}
      {/* </p> */}
      <button onClick={toggleStatus}>
        Toggle Line-Through
      </button>
    </div>
  );
}

export default App1;