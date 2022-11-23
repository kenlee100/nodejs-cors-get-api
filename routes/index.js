const express = require("express");
const router = express.Router();
const Client = require("node-rest-client").Client;
const client = new Client();

// api路徑
router.get("/travelData", function (req, res) {
  let url = "https://culture.tainan.gov.tw/shared/Statistics_Json";
  client.get(url, function (data, response) {
    res.send({
      result: data,
      success: true,
      message: "資料取得成功",
    });
  });
});
// 進入首頁
router.get("/", function (req, res) {
  res.render("index");
});
module.exports = router;
