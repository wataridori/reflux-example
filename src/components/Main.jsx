var React = require('react');
var Reflux = require('reflux');
var VoteStore = require('../stores/VoteStore.jsx');
var VoteActions = require('../actions/VoteActions.jsx');

var Main = React.createClass({
    mixins: [Reflux.connect(VoteStore, 'votes')],

    _onVoteUpClick: function() {
        VoteActions.voteUp();
    },

    _onVoteDownClick: function() {
        VoteActions.voteDown();
    },

    _onVoteResetClick: function() {
        VoteActions.voteReset();
    },

    render: function(){
        var progressStyle = {
            width: this.state.votes.up_rate + '%'
        }
        return (
            <div className="container">
                <h1 className="center light-blue-text lighten-3">Simple Example using Reflux</h1>
                <div className="col s12 z-depth-4 card-panel teal lighten-3">
                    <div className="row center">
                        <h3 className="deep-orange-text lighten-1">{this.state.votes.up_rate}% ({this.state.votes.up}) : {this.state.votes.down_rate}% ({this.state.votes.down})</h3>
                    </div>
                    <div className="progress">
                        <div className="determinate" style={progressStyle}></div>
                    </div>
                    <div className="row">
                        <a href="#" className="left waves-effect waves-circle waves-light btn-floating secondary-content blue act-btn" onClick={this._onVoteUpClick}>
                            <i className="mdi-action-thumb-up"></i>
                        </a>

                        <a href="#" className="right waves-effect waves-circle waves-light btn-floating secondary-content blue act-btn" onClick={this._onVoteDownClick}>
                            <i className="mdi-action-thumb-down"></i>
                        </a>
                    </div>
                    <div className="row center">
                        <button className="waves-effect waves-light btn red" onClick={this._onVoteResetClick}><i className="mdi-content-undo left" />Reset</button>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Main;