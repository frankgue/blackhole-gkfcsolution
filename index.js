var async = require("./libs/async.js");
var request = require("./libs/request.js");
var config = require("./config.json");

async.map(config.images, request, function (err, results) {
  if (err) console.error(err);
  let totalResutl = 0;
  for (let i = 0; i < results.length; i++) {
    totalResutl += results[i].length;
  }
  console.log("All Download ended, results : ", totalResutl);
});
