'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  // DONE: What value is in 'module'? What is the purpose of this line of code?
  //This function is inside an IFFE. Module has a value of window which makes the function available on the global scope.
  module.aboutController = aboutController;

})(window);
