const
React = require('react'),
ReactDOM = require('react-dom');

export default class TitleBar extends React.Component {
    render() {
        return <div id="title-bar">
            <div id="window-action-buttons">
                <div id="minimize-window-button" className="titlebar__action-button">_</div>
                <div id="maximize-window-button" className="titlebar__action-button">^</div>
                <div id="close-window-button" className="titlebar__action-button">x</div>
            </div>
        </div>

    }
}