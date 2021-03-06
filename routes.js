var JSX = require('node-jsx').install(),
    React = require('react'),
    Main = require('./components/Main.jsx'),
    ArticlePage = require('./components/ArticlePage.jsx');

module.exports = {

  index: function(req, res) {
      // Render React to a string
      var markup = React.renderComponentToString(
        Main({
        })
      );

      // Render our 'home' template
      res.render('home', {
        markup: markup, // Pass rendered react markup
        state: JSON.stringify({}) // Pass current state to client side
      });

  },

  page: function(req, res) {
      res.send('');
  },

  article: function (req, res) {
    var markup = React.renderComponentToString(ArticlePage({}));
    res.render('article', {
      markup: markup,
      state: JSON.stringify({})
    });
  }

}