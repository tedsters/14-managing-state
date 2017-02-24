// DONE: Where is this invoked? Where does it interact elsewhere in the code?
// This is an IFFE, so it's invoked as soon as this JS file is loaded on admin.html. It grabs the Handlebars template for this page, compiles it with a word count for each author, then appends it to the unordered list with the 'author-stats' class. Then it adds the total articles and words to the definition list where these are displayed on the same page. Then it invokes the fetchAll method with a callback to adminView.initAdminPage.

(function() {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
      Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(Article.all.length);
      $('#blog-stats .words').text(Article.numWordsAll());
    }
  };

  Article.fetchAll(adminView.initAdminPage);
})();
