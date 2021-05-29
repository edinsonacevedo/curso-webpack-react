import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import "../src/styles/global.scss";


ReactDom.render(
    <App></App>,
    document.getElementById('app')
);