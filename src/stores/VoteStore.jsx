var Reflux = require('reflux');
var VoteActions = require('../actions/VoteActions.jsx');

var _votes = {
    up: 0,
    down: 0
};

var VoteStore = Reflux.createStore({
    listenables: [VoteActions],
    onVoteUp: function() {
        _votes.up++;
        this.updateVotes();
    },
    onVoteDown: function() {
        _votes.down++;
        this.updateVotes();
    },
    onVoteReset: function() {
        _votes = {
            up: 0,
            down: 0
        };
        this.updateVotes();
    },
    updateVotes: function() {
        this.trigger(this.getVotes());
    },
    getInitialState: function() {
        return this.getVotes();
    },
    getVotes: function() {
        var up_rate = (_votes.up || _votes.down) ? _votes.up / (_votes.up + _votes.down) * 100 : 50;
        var down_rate = 100 - up_rate;
        _votes.up_rate = up_rate.toFixed(2);
        _votes.down_rate = down_rate.toFixed(2);
        return _votes;
    }
});

module.exports = VoteStore;