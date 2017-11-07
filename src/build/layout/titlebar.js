'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const React = require('react'),
      ReactDOM = require('react-dom');

class TitleBar extends React.Component {
    render() {
        return React.createElement(
            'div',
            { id: 'title-bar' },
            React.createElement(
                'div',
                { id: 'window-action-buttons' },
                React.createElement(
                    'div',
                    { id: 'minimize-window-button', className: 'titlebar__action-button' },
                    '_'
                ),
                React.createElement(
                    'div',
                    { id: 'maximize-window-button', className: 'titlebar__action-button' },
                    '^'
                ),
                React.createElement(
                    'div',
                    { id: 'close-window-button', className: 'titlebar__action-button' },
                    'x'
                )
            )
        );
    }
}
exports.default = TitleBar;