import React, { useState, useEffect } from 'react';
import { main } from '../index';

function DisplayResponse() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchResponse = async () => {
      const responseData = await main();
      setResponse(() => responseData?);
    };

    fetchResponse();
  }, []);

  return (
    <div>
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DisplayResponse;
