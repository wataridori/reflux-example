var Reflux = require('reflux');

var VoteActions = Reflux.createActions([
    "voteUp",
    "voteDown",
    "voteReset",
]);

module.exports = VoteActions;