// Dependencies
var friendsData = require("../data/friends");

// Make the following available to the app
module.exports = function(app) {
  // serve the friends JSON data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // handle post request from the survey page
  app.post("/api/friends", function(req, res) {
    // declare variable to store closest match from available friends
    var best = {
      name: "",
      primary: "",
      secondary: "",
      tertiary: "",
      difference: Infinity
    };

    var user = req.body;
    var userScores = user.scores;

    var diff;

    for (var i = 0; i < friendsData.length; i++) {
      diff = 0;

      for (var p = 0; p < friendsData[i].scores.length; p++) {
        diff += Math.abs(
          parseInt(userScores[p]) - parseInt(friendsData[i].scores[p])
        );
        if (diff <= best.difference) {
          best.name = friendsData[i].name;
          best.primary = friendsData[i].primary;
          best.secondary = friendsData[i].secondary;
          best.tertiary = friendsData[i].tertiary;
        }
      }
      console.log("Current best match: " + best.name);
    }

    friendsData.push(req.body);
    res.json(true);
  });

  // Kept from an example file, not used
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = [];

    res.json({ ok: true });
  });
};
