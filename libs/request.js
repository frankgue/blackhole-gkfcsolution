var http = require("https");

var request = function (data, callback) {
  if (!data.url) return callback(new Error("Insert image url un data.url"));
  console.log("Start : ", data.url);

  http
    .get(data.url, function (response) {
      var body = "";
      response.on("data", function (d) {
        body += d;
      });
      response.on("end", function () {
        console.log("Finish " + data.url + " Size: " + body.length);
        return callback(null, body);
      });
    })
    .on("error", function (err) {
      console.log("Got error: " + err.message);
    });
};

module.exports = request;
