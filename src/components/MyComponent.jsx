import React, { useEffect, useState } from 'react';
import { fetchJustEatByPostCode } from '../common/apiUtils';

import reactIcon from '../assets/images/react-icon.png';
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
            <h1 className="title">hello</h1>
            <img src={reactIcon}></img>
            <h3>{text}</h3>
        </div>
    );
};

export default MyComponent;
