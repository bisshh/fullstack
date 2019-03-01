import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    return React.createElement('h1',{className:'title'},React.createElement('div')) //first argument is a tag, second argument is class or function and last is a content
}

ReactDOM.render(<App/>, document.querySelector('#root'));