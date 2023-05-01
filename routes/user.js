const express= require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.send("user  found");
  });
  
  router.get("/info", (req, res) => {
      res.send("user  info");
    });

    module.exports = router;