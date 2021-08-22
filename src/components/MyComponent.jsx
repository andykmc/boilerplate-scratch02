import React, { useEffect, useState } from 'react';
import { fetchJustEatByPostCode } from '../common/apiUtils';

import './MyComponent.scss';

const MyComponent = () => {
  const [text, setText] = useState();
  const a = { a: 1 };

  useEffect(() => {
    (async function fetchData() {
      const data = await fetchJustEatByPostCode();
      setText(JSON.stringify(data));
    })();


  }, []);

  return (
    <div className="my-component">
      <h2>{null ?? 'a'}</h2>
      <h2>{a?.a ?? 'A'}</h2>
      <code>{text}</code>
    </div>
  );
};

export default MyComponent;
