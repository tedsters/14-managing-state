'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE: Where is this invoked? What values are passed in? Where does it interact elsewhere in the code?
  // This is called by the aboutController.index fuction and is passed a callback to repoView.index. A request is sent to proxyGitHub and the data is stored in repos.all and then, the callback displays the repo page with the data from Git Hub.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
