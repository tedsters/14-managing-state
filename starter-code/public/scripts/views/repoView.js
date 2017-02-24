'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE: What is in 'render'? What values are passed in? Where does it interact elsewhere in the code?
  // Render is a new constant scoped locally to this IFFE. It's a function which uses Handlebars to build UL list items on the "about" view of index.html. This shows information for the repos that were returned by our GitHub API call.
  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
