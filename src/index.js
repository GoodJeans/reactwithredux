import React from 'react';
import ReactDOM from 'react-dom';

//Create a react Component
const App = function(){
    return <div>Hi there!</div>
}
ReactDOM.render(
    <App/>,document.querySelector('#root')
);