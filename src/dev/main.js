const
React = require('react'),
ReactDOM = require('react-dom'),
TitleBar = require('./layout/titlebar').default;

ReactDOM.render(
    <TitleBar/>,
    document.getElementById('root')
);