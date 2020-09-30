import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Wrapper from "./components/Wrapper";

ReactDOM.render(
    <Wrapper>
        <App />
    </Wrapper>,
    document.getElementById('root')
);
serviceWorker.unregister();