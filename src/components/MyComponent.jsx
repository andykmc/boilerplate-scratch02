import React, { useEffect, useState } from 'react';
import './MyComponent.scss';

const MyComponent = () => {
  const [text, setText] = useState();
  const a = { a: 1 };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/justeat/postcode?q=tw92jx', () => {
        return res;
      });
      const resContent = await res.json();
      setText(JSON.stringify(resContent));
    };
    fetchData();
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
