import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClickButton from './App';
import ItemsList from './App';
import * as serviceWorker from './serviceWorker';
import propsValues from './App';
ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render( <ItemsList data={propsValues} />, document.getElementById('root'));

//ReactDOM.render(<ClickButton />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
