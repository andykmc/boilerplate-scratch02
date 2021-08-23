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
            <h1>hello</h1>
            <h2>{text}</h2>
        </div>
    );
};

export default MyComponent;
