// Data Sources
var friendsData = require("../data/friends.js");

// Routing
module.exports = function(app) {
  // Get Route
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // Post Route
  app.post("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // Clear
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = [];

    res.json({ ok: true });
  });
};
