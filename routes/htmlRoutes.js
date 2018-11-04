// Dependencies
var path = require("path");

// Routing
module.exports = function(app) {
  
  // Get Requests

  // serve the survey page on link click or url entry...
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // ... or the home page if the user clicks a broken link or enters a typo in the url
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
