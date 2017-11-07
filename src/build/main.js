'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      TitleBar = require('./layout/titlebar').default;

ReactDOM.render(React.createElement(TitleBar, null), document.getElementById('root'));