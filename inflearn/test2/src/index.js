import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Timer from "./chapter_04/timer";
import Library from "./chapter_03/Library";

setInterval( () => {
    ReactDOM.render(
        <React.StrictMode>
            <Library />
        </React.StrictMode>,
        document.getElementById('root')
    );

    }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
